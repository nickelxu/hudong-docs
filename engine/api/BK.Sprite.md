# 2.5 BK.Sprite
#### 父类：BK.Node
> 精灵类

###成员变量
变量  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
size | Object | 大小 | 
anchor | Object | 锚点 | 
cornerRadius | number | 圆角 | 单位为像素

例子：

	var babaTex  =new BK.Texture('GameRes://texture/test.png');
	var sp =new BK.Sprite(200,200,babaTex,0,1,1,1);
	sp.size = {width:200,height:200};      //大小
	sp.anchor = {x:0.5,y:0.5};             //锚点
	sp. cornerRadius = 50；                //圆角

### 方法
#### 构造函数 new  BK.Sprite(width,height,texture,flipU,flipV,stretchX,stretchY)
参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
width | number | 宽 |  
height | number | 高 |  
texture | Object | 纹理 |  BK.Texture生成的对象
flipU | number | 是否左右翻转  | 0不翻转，1为翻转
flipV | number | 是否上下翻转 |  1不翻转，0为翻转
stretchX | number | 拉伸X  |  
stretchY | number | 拉伸Y |  
返回值：

 类型 |名称 | 备注
------------- | ------------- | -------------
 BK.Sprite | 精灵对象 |
 
例子：

	var tex  =new BK.Texture('GameRes://texture/test.png');
	var sp =new BK.Sprite(200,200,tex,0,1,1,1);

#### setTexture(texture)
>设置纹理

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
texture|Object|纹理对象|由BK.Texture生成的对象

返回值：无

例子

	var tex  =new BK.Texture('GameRes://texture/test.png');
	var sp =new BK.Sprite(200,200,tex,0,1,1,1);
	var tex2  =new BK.Texture('GameRes://texture/test2.png');
	sp = sp.setTexture(tex2)

#### setUVFlip(u,v)
>设置翻转

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
u |number|水平方向翻转|0不翻转，1为翻转
v |number|垂直方向翻转|1不翻转，0为翻转

返回值：无

例子

	var tex  =new BK.Texture('GameRes://texture/test.png');
	var sp =new BK.Sprite(200,200,tex,0,1,1,1);
	sp.setUVFlip(1,1); //水平翻转，垂直不翻转

#### setXYStretch(x,y)
>设置纹理

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
x |number|水平方向是否铺满宽|1铺满，0为不铺满
y |number|垂直方向是否铺满高|1铺满，0为不铺满

返回值：无

例子

	var tex  =new BK.Texture('GameRes://texture/test.png');
	var sp =new BK.Sprite(200,200,tex,0,1,1,1);
	sp.setXYStretch(1,0); //水平不铺满宽，垂直铺满高

#### adjustTexturePosition(x,y,w,h,rotated)
> 调整纹理显示区域
>
>调整纹理显示为一部分，单位均为像素。例如纹理大小为128*128px, adjustTexturePosition(64,64,64,64)表示显示右上角四分一的部分

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
x |number|x坐标|
y |number|y坐标|
w |number|显示区域宽|
h |number|显示区域高|
rotated |bool|是否旋转|可选参数，默认false。true时表示



例子
	
	//详情可参考sprite_demo.js
	
	//纹理对应图大小为258 × 388 px
	//现调整为显示从(1,131)开始长宽都为256区域
	var testTex = new BK.Texture("GameRes://texture/spritesheet/test.png");
	var iconSp = new BK.Sprite(375,375,testTex,0,1,1,1);
	iconSp.adjustTexturePosition(1,131,256,256);
	iconSp.position = {x:100,y:100};
	BK.Director.root.addChild(iconSp);



### 例子
查看 script/demo/render/sprite_demo.js