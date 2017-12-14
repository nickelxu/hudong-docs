# 2.21 BK.SpriteSheetCache 
>图集
>
>调用前请主动加载spriteSheetCache.js

### 方法 
#### loadSheet(jsonPath,pngPath,format, minFilter, magFilter, uWrap, vWrap)

> 加载图集

 参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
jsonPath | string | 图集json文件路径 | 
pngPath | string | 图集png文件路径 | 
format | number | 资源格式  |  （可选，默认为RGBA8888）6代表RGBA8888,4代表RGBA4444
minFilter | number | 缩小采样方式  |  （可选，默认为1） 0最近采样 1线性采样
magFilter | number | 放大采样方式 | （可选，默认为1）0最近采样 1线性采样 
uWrap | number | u轴重复方式 | （可选，默认为1） 0镜像重复，1重复至边缘，2重复
vWrap | number | v轴重复方式 |  （可选，默认为1） 0镜像重复，1重复至边缘，2重复


例子：

```
//加载图集
var texPath = "GameRes://texture/spritesheet/test.png";
var jsonPath = "GameRes://texture/spritesheet/test.json";
BK.SpriteSheetCache.loadSheet(jsonPath,texPath);
//
//BK.SpriteSheetCache.loadSheet(jsonPath,texPath,format, minFilter, magFilter, uWrap, vWrap);
```

#### removeSheet(jsonPath,pngPath)

> 移除图集

 参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
jsonPath | string | 图集json文件路径 | 
pngPath | string | 图集png文件路径 | 

例子：

```
//移除图集
var texPath = "GameRes://texture/spritesheet/test.png";
var jsonPath = "GameRes://texture/spritesheet/test.json";
BK.SpriteSheetCache.removeSheet(jsonPath,texPath);
```

#### getTextureByFilename(filename)
> 根据图集文件中某个文件的名字获取纹理

 参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
filename | string | 图集文件中某个文件的名字 | 

返回值：

 类型 |名称 | 备注
------------- | ------------- | -------------
 BK.Texture | BK.Texture对象 |


例子：

```
var texture   = BK.SpriteSheetCache.getTextureByFilename("green_btn.png");
```

#### getFrameInfoByFilename(filename)
> 根据图集文件中小图名称，获取小图的位置信息

 参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
filename | string | 图集文件中小图的名字 | 

返回值：

 类型 |名称 | 备注
------------- | ------------- | -------------
 Object | 小图位置信息 |


例子：

```
var frameInfo = BK.SpriteSheetCache.getFrameInfoByFilename("green_btn.png");
var w = frameInfo.frame.w; //具体小图的宽
var h = frameInfo.frame.h; //具体小图的高
var x = frameInfo.frame.x; //具体小图在大图中的x
var y = frameInfo.frame.y; //具体小图在大图中的y

```


#### getTextureFrameInfoByFileName(filename)
> 根据图集文件中小图名称，获取小图的位置信息和纹理对象

 参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
filename | string | 图集文件中小图的名字 | 

返回值：

 类型 |名称 | 备注
------------- | ------------- | -------------
 Object | 小图的位置信息和纹理对象 |
 
 
例子：

```
var textureInfo = BK.SpriteSheetCache.getTextureFrameInfoByFileName("green_btn.png");
var frameInfo = textureInfo.frameInfo;
var w = frameInfo.frame.w; //具体小图的宽
var h = frameInfo.frame.h; //具体小图的高
var x = frameInfo.frame.x; //具体小图在大图中的x
var y = frameInfo.frame.y; //具体小图在大图中的y

var texPath =  textureInfo.texturePath; //纹理路径

```



#### getTexturePathByFilename(filename)
> 根据图集文件中小图名称，获取大纹理路径名称

 参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
filename | string | 图集文件中小图的名字 | 

返回值：

 类型 |名称 | 备注
------------- | ------------- | -------------
 string| 纹理路径名称 |


例子：


#### createSheetSprite(filename,width,height)
> 根据图集文件中小图名称，创建一个图集精灵对象


 参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
filename | string | 图集文件中小图的名字 | 
width | number | 宽（选填，不填时为小图的图片大小） | 
height | number | 宽（选填，不填时为小图的图片大小） | 



### 例子
查看 script/demo/render/spriteSheetCache_demo.js

