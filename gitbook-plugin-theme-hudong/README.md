# 自定义主题

This is the default theme for GitBook since version `3.0.0`. It can be used as a template for theming books or can be extended.

![Image](https://raw.github.com/GitbookIO/theme-default/master/preview.png)

## 目录分析

* `src` 目录：
    `src/js/` js文件 `src/less` less样式文件
* `_layouts` 目录:
    * `_layouts/layout.html` 基本布局 markup
    * `_layouts/website/` extends `../layout.html` 对基本布局的扩展
* `_assets` 目录:
    * `src/build.sh` 打包脚本的输出目录，存放打包后的 css 和 js 文件

## 工作原理
1. 执行 `gitbook build` 命令
2. 命令根据模板生成 html 页面, 模板文件为 `_layouts/website/layout.html`
3. 