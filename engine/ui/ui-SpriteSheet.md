# 3.2 图集



## 打包方法
引擎中使用TexturePacker作为打包工具
### 1.添加图片文件
将帧图片拖拽到TexturePacker中
![](img/texturepacker1.png)
### 2.输出文件
此处需要说明的是Data Format必须选择JSON Array
![](img/texturepacker2.png)
然后点选Public sprite sheet输出文件
### 3.调用加载
```
BK.Script.loadlib('GameRes://script/core/render/animatedSprite.js');
```