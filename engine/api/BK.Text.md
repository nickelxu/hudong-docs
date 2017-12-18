# 2.8 BK.Text

### 成员变量
变量  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
content | string | 文字内容 | 无

例子：

	var style = {
	    "fontSize":20,
	    "textColor" : 0xFFFF0000,
	    "maxWidth" : 200,
	    "maxHeight": 400,
	    "width":100,
	    "height":200,
	    "textAlign":0,
	    "bold":1,
	    "italic":1,
	    "strokeColor":0xFF000000,
	    "strokeSize":5,
	    "shadowRadius":5,
	    "shadowDx":10,
	    "shadowDy":10,
	    "shadowColor":0xFFFF0000
	}
	var txt = new BK.Text(style,"test");
	txt.content = "new test";


### 方法
#### 构造函数 new BK.Text(style,content)

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
style | Object | 文字样式|
content | string | 文字内容 |  
返回值：
文字对象

 类型 |名称 | 备注
------------- | ------------- | -------------
 Object | 节点对象 |
例子：

	var style = {
	    "fontSize":30,			//字号
	    "textColor" : 0xFFFF0000, //颜色  ARGB编码
	    "maxWidth" : 100,			//最大宽度
	    "maxHeight":100,			//最大高度
	    "width":100,					//宽度
	    "height":100,				//高度
	    "textAlign":0,				//对其方式 0左 1中 2右
	    "bold":1,						//粗体
	    "italic":1,					//斜体
	    "strokeColor":0xFF000000, //描边
	    "strokeSize":5,				//描边宽
	    "shadowRadius":5,			//阴影圆角半径
	    "shadowDx":10,				//阴影x偏移
	    "shadowDy":10,				//阴影y偏移
	    "shadowColor":0xFFFF0000	//阴影颜色
	}
	
	var txt = new BK.Text(style,"test");

