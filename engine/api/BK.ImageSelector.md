# 2.25 BK.ImageSelector 图片选择（打开相册/相机）

### 方法
####构造方法 BK.ImageSelector(callback）

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
callback | function | 回调函数 | 


例子：
	
	function imageallback = function(selector){
	    var status = selector.resultCode;
	    if(status == 1) //选择图片成功
	    {}
	}
	var imageSelector = new BK.ImageSelector(imageallback);
  
####打开图片选择器 selectImage(）
参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
无 |  | | 打开相机/相册


例子：

	imageSelector.selectImage()
  
  
###属性 
####type
打开类型

参数  | 类型 | 名称 | 备注
------------- | ------------- | -------------| -------------
0 | number | 从相册选择| 
1 | number | 相机拍照

例子：

    imageSelector.callback = function(selector){
    var status = selector.resultCode;
    if(status == 1) //选择图片成功
    {
        var texture = selector.getTexture();
        sp.setTexture(texture);
        var textureData = selector.getTextureData();
    }
	}
  
#### callback
设置回调函数

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
function | function | 回调函数| 


例子：

    imageSelector.type = 0;//打开相册
    imageSelector.type = 1;//打开相机
  
  
  ##实例代码
详细代码请参考
```BK.Script.loadlib("GameRes://script/demo/basics/imageSelector_demo.js");```
  
  
  