const path = require('path');

module.exports = [{
    entry: './src/js/core/index.js',
    output: {
        filename: './_assets/website/gitbook.js'
    }
},{
    entry: './src/js/theme/index.js',
    output: {
        filename: './_assets/website/theme.js'
    }
}];
