#! /bin/bash

if [[ $1 = "dev" ]]; then
    echo 'build without minifing'
fi

# Cleanup folder
rm -rf _assets

# Recreate folder
mkdir -p _assets/website/
mkdir -p _assets/ebook/

# precompile login.html to js file
npx nunjucks-precompile _layouts/website/login.html > src/js/theme/loginTpl.js

# Compile JS
if [[ $1 = "dev" ]]; then
    browserify src/js/core/index.js --debug -o _assets/website/gitbook.js
    browserify src/js/theme/index.js --debug -o _assets/website/theme.js
else
    browserify src/js/core/index.js | uglifyjs -mc > _assets/website/gitbook.js
    browserify src/js/theme/index.js | uglifyjs -mc > _assets/website/theme.js
fi

# Compile Website CSS
if [[ $1 = "dev" ]]; then
    lessc src/less/website.less _assets/website/style.css
else
    lessc -clean-css src/less/website.less _assets/website/style.css
fi

# Compile eBook CSS
lessc -clean-css src/less/ebook.less _assets/ebook/ebook.css
lessc -clean-css src/less/pdf.less _assets/ebook/pdf.css
lessc -clean-css src/less/mobi.less _assets/ebook/mobi.css
lessc -clean-css src/less/epub.less _assets/ebook/epub.css

# Copy fonts
mkdir -p _assets/website/fonts
cp -R node_modules/font-awesome/fonts/ _assets/website/fonts/fontawesome/

# Copy icons
mkdir -p _assets/website/images
cp node_modules/gitbook-logos/output/favicon.ico _assets/website/images/
cp node_modules/gitbook-logos/output/apple-touch-icon-152.png _assets/website/images/apple-touch-icon-precomposed-152.png
cp src/images/* _assets/website/images/
