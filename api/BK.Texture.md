# 2.4 BK.Texture

> 纹理类


###成员变量
变量  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
size | Object | 纹理的实际像素宽高 |

例子：
		
	var backTex  =new BK.Texture('GameRes://texture/plane_blue.png');
	var size = backTex.size;
	var width = size.width;
	var height = size.height;

### 方法

	
#### 构造函数 new BK.Texture(path,format,minFilter,magFilter,uWrap,vWrap)

> 构造函数
> 

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
path | string | 纹理文件路径 |  
format | number | 资源格式  |  （可选，默认为RGBA8888）6代表RGBA8888,4代表RGBA4444
minFilter | number | 缩小采样方式  |  （可选，默认为1） 0最近采样 1线性采样
magFilter | number | 放大采样方式 | （可选，默认为1）0最近采样 1线性采样 
uWrap | number | u轴重复方式 | （可选，默认为1） 0镜像重复，1重复至边缘，2重复
vWrap | number | v轴重复方式 |  （可选，默认为1） 0镜像重复，1重复至边缘，2重复

返回值:

 类型 |名称 | 备注
------------- | ------------- | -------------
 BK.Texture | 纹理对象 |

例子：


```
var tex  =new BK.Texture('GameRes://texture/test.png');

```

	
#### 构造函数 new BK.Texture(buffer,width,height,format,minFilter,magFilter,uWrap,vWrap)

> 构造函数
> 
> 根据传入的buffer和宽高构造纹理。buffer必须为bitmap格式，例如32*32px,RGBA8888的图片，，buffer长度必须为

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
buffer | BK.Buffer | 纹理二进制数据 |  必须为bitmap。
width | number | 宽 |  
height | number | 高 |  
format | number | 资源格式  |  （可选，默认为RGBA8888）6代表RGBA8888,4代表RGBA4444
minFilter | number | 缩小采样方式  |  （可选，默认为1） 0最近采样 1线性采样
magFilter | number | 放大采样方式 | （可选，默认为1）0最近采样 1线性采样 
uWrap | number | u轴重复方式 | （可选，默认为1） 0镜像重复，1重复至边缘，2重复
vWrap | number | v轴重复方式 |  （可选，默认为1） 0镜像重复，1重复至边缘，2重复

返回值:

 类型 |名称 | 备注
------------- | ------------- | -------------
 BK.Texture | 纹理对象 |

例子：


```
var buffer = ...;

var tex  =new BK.Texture(buffer,32,32);

```


