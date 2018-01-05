# 厘米游戏项目文档

外网可访问文档目录为

|    目录     |       说明       |      Author      |                               外网链接                               |
| ----------- | ---------------- | ---------------- | -------------------------------------------------------------------- |
| access/     | 通用文档         | nickelxu         | [/docs/access/](http://hudong.qq.com/docs/access/index.html)         |
| actsandbox/ | 活动沙箱(脚本化) | nkchen, sparkjli | [/docs/actsandbox/](http://hudong.qq.com/docs/actsandbox/index.html) |
| engine/     | 游戏引擎(bricks) | wesleyxiao       | [/docs/engine/](http://hudong.qq.com/docs/engine/index.html)         |

其他文档为开发文档。

## 文档更新指南

### 0. 文档 SVN 地址
文档在 `hudong.qq.com` web工程内，svn地址:   http://tc-svn.tencent.com/CMShow/CMShow_web_server_proj/trunk/hudong.qq.com/node_modules/hudong.qq.com/docs

开发同学可申请代码权限即可，[在线查看代码库](http://code.oa.com/v2/svn/CMShow/CMShow_web_server_proj/trunk/hudong.qq.com/node_modules/hudong.qq.com/docs) ; 产品同学在办公网下建议还是 rtx 传文件给开发。

![文档目录](https://qzonestyle.gtimg.cn/aoi/sola/20180105112114_rRlot1g4qG.png)

三个目录分别对应当前3个板块，3个文件夹下分别是3个独立的 gitbook 项目。请相关同学关注即可。

PS: 如果需要创建其他板块，需要修改现有主题模板，联系 rianma 协助。

### 1. 搭建 Node.js 环境安装 gitbook-cli 工具

gitbook 是基于 nodejs 的命令行工具，需要各位在 nodejs 环境基础上，通过 npm 安装：

```
npm install gitbook-cli
```

PS: gitbook 的安装和使用都要依赖 npm 访问外网，建议配代理

开发网代理
```bash
npm config set proxy http://dev-proxy.oa.com:8080
npm config set https-proxy http://dev-proxy.oa.com:8080
```

办公网代理
```bash
npm config set proxy http://web-proxy.oa.com:8080
npm config set https-proxy http://web-proxy.oa.com:8080
```

Mac 下在终端设置系统变量，无需单独配置 npm config
```bash
export http_proxy='http://dev-proxy.oa.com:8080'
export https_proxy='http://dev-proxy.oa.com:8080'
```

### 2. Gitbook 电子书目录结构

gitbook 采用 markdown 格式文件负责文档内容，用目录形式组织作为不同章节目录。进入 actsandbox 目录后看到文件结构：

```
./actsandbox/
├── README.md
├── SUMMARY.md
├── book.json
├── chapter1/
│   ├── actflow.md
│   ├── actflow.png
│   ├── emuenv.md
│   ├── introduction.md
│   └── testandofcenv.md
└── chapter2/
    ├── btnClickChart.png
    ├── filezip.md
    └── zipupload.png
```

* `SUMMARY.md` 文件为目录文件
* `README.md` 为书籍序言文件
* `chapter1/`, `chapter2/` 文件夹作为不同章节的文件，与 SUMMARY.md 中的路径对应即可
* 最好的办法是直接对照引擎文档，`engine/` 目录里面的文件，比葫芦画瓢就可以。

在本地编辑文件后，在该gitbook项目目录下执行 `gitbook serve`，在本地访问 http://localhost:4000 预览生成的效果。首次执行 `gitbook serve` 前要执行 `gitbook install` 命令安装所需的插件。

> 如果 install 报错 `gitbook-plugins-theme-hudong` 可以忽略，该插件已包含在svn中不需要从npm安装。

### 3. Gitbook markdown 语法

* gitbook 使用的是常规的 markdown 语法加上 github flavord markdown 风格的表格写法。
* <span  style="color: red">注意与 tapd wiki 语法有差异，主要是空格、换行等细节，以及 table 写法不同</span> 
* 不熟悉 markdown 的参考 `docs/engine` 目录 wesleyxiao 的写法即可，在本地使用 `gitbook serve` 预览效果。

## 使用参考

1. [十分钟学会markdown](http://maqiangthunder.github.io/2016/04/02/hexo/%E5%8D%81%E5%88%86%E9%92%9F%E5%AD%A6%E4%BC%9Amarkdown/)
2. [gitbook markdown 语法定义，与 tapd wiki 不完全兼容](https://toolchain.gitbook.com/syntax/markdown.html)
3. [gitbook 表格语法，与 tapd wiki 不同](https://gitbookio.gitbooks.io/markdown/content/syntax/tables.html)
4. [gitbook 使用中文文档](http://www.chengweiyang.cn/gitbook/basic-usage/README.html)

## 文档修改到发布

文档修改完后，提交 SVN, 由前端负责 build 并建 ars 单发布 _book 目录下的静态 html 文件，完成发布。
