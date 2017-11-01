# 2.2 BK.Director
> 导演类

### 成员变量
变量  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
screenScale | number | 屏幕比例 | 
renderSize | Object | 屏幕逻辑大小 | 
screenPixelSize | Object | 屏幕实际像素大小 | 
root | Object | 根节点 | 
fps | number | 游戏实时帧率 | 


例子：

	//屏幕比例
	var  scale = BK.Director.screenScale;
	//逻辑点
	var renderSize = BK.Director.renderSize;
	var width  = renderSize.width;
	var height = renderSize.height;
	
	//实际像素
	var pixelSize = BK.Director.screenPixelSize;
	var pWidth  = pixelSize.width;
	var pWheight = pixelSize.height;
	//根节点
	var root =BK.Director.root;


### 方法 
#### attachSpace(space)

> 附着一个物理引擎中的space至全局环境中


 参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
space | BK.Physics.Space | 物理引擎中Space对象 |  

返回值：无

例子：
	
	var space = new BK.Physics.Space({"x":0,"y":-100},123)
	BK.Director.attachSpace(space)

### 例子
查看 script/demo/basics/director_demo.js