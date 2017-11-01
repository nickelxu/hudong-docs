# 2.10 BK.SkeletonAnimation

>骨骼动画类
>
>父类BK.Node
手机QQ版本

### 成员变量
变量  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
canMixVertexColor | boolean | 是否启用颜色叠加 | 
timeScale | number | 播放速率 | 
paused | boolean | 暂停 | 
accessoryTypes | Array<string> | 装扮类型数组 | <font color=#ff0000>手机QQ版本 7.2.5</font>

例子：
	
	var rice =new BK.SkeletonAnimation(atlasPath, jsonPath, 1,null,null,null );
	//启动spine动画颜色叠加
	rice.canMixVertexColor = true ;
	rice.vertexColor = {r:1, g:1, b:1, a:0.5}

### 方法
#### 构造函数 new BK.SkeletonAnimation(atlasPath, jsonPath, 1,startCB,completeCB,endCB )

>加载骨骼

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
atlasPath | string | atlas文件路径 |  
jsonPath | string | json文件路径 |  
timeScale | number | 播放速率 |  1为正常速率
startCB | function | 开始播放事件回调 |  
completeCB | function | 动画播放完一次 |  
endCB | function |动画播放完成，即将播放另外的动画 |  
返回值：

 类型 |名称 | 备注
------------- | ------------- | -------------
 Object | 骨骼动画对象 |
 
例子：

	var jsonPath = BK.Script.pathForResource("GameRes://suit/default/role/role", 'json');
	var atlasPath = BK.Script.pathForResource("GameRes://suit/default/role/role", 'atlas');
	// animName为动画名，trackId为setAnimation指定的标识符，skeletonAnimation为spine实例
	function startCB(animName,trackId,skeletonAnimation)
	{
	    BK.Script.log(0,0,"Start Event Callback");
	}
	function completeCB(animName,trackId,skeletonAnimation)
	{
	    BK.Script.log(0,0,"Complete Event Callback");
	}
	function endCB(animName,trackId,skeletonAnimation)
	{
	    BK.Script.log(0,0,"End Event Callback");
	}
	
	/**
	 * 骨骼动画构造函数 （加载骨骼）
	 * atlasPath altas文件路径
	 * jsjsonPath json文件路径
	 * timeScale  播放速率 1为正常速率
	 * startCB    开始播放事件回调
	 * completeCB 动画播放完毕
	 * endCB      动画播放完成，即将播放另外的动画
	 */
	var ani =new BK.SkeletonAnimation(atlasPath, jsonPath, 1,startCB,completeCB,endCB );
	ani.position = {x:100,y:100};



####  setAccessory(jsonPath, atlasPath);
>加载装扮


参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
atlasPath | string | 装扮atlas文件路径 |  
jsonPath | string | 装扮json文件路径 |  

返回值：无

例子：
	
	//下列例子为加载厘米秀小人的7件装扮
	var  accArray = ['FaceSuit', 'BackSuit', 'BottomSuit', 'FaceOrnament', 'TopSuit', 'HairType'];
	for (var i=0;i<accArray.length;i++)
	{
	    var j = "GameRes://suit/default/" + accArray[i] + "/dress";
	    var a = "GameRes://suit/default/" + accArray[i] + "/dress";
	    var jPath = BK.Script.pathForResource(j, 'json');
	    var aPath = BK.Script.pathForResource(a, 'atlas');
	    ani.setAccessory(jPath, aPath);
	}


####  removeAccessory(accessoryName);
>移除装扮


参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
accessoryName | string | 待移除的装扮名 |  json中命名的装扮名

返回值：无

例子：

	//移除头饰装扮
    ani.removeAccessory("HairType");


####  setAccessoryWithInfo(jsonPath, atlasPath,content)
>加载气泡


参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
jsonPath | string | 气泡json文件路径 |  
atlasPath | string | 气泡atlas文件路径 |  
content | string | 气泡文案|  

返回值：无

例子：
	
	var bubbleJsonPath = BK.Script.pathForResource("GameRes://bubble/1/dress", 'json');
	var bubbleAtlasPath = BK.Script.pathForResource("GameRes://bubble/1/dress", 'atlas');
	ani.setAccessoryWithInfo(bubbleJsonPath, bubbleAtlasPath, "你好");


####  setAccessoryAnimation(jsonPath, atlasPath,animationName)
>添加动画 （只添加，未播放）


参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
jsonPath | string | json文件路径 |  
atlasPath | string | atlas文件路径 |  
animationName | string | 动作名| 可自定义，用于播放动画

返回值：无

例子：
	
	//添加名为一个动画，并命名为 anim1 
	var animJson  = BK.Script.pathForResource("GameRes://action/crash_action_peer/action", 'json');
	var animAtlas = BK.Script.pathForResource("GameRes://action/crash_action_peer/action", 'atlas');
	ani.setAccessoryAnimation(animJson, animAtlas, "anim1");
	


####  removeAccessoryAnimation(animationName)
>移除动画

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| ------------- 
animationName | string | 动作名|

返回值：无

例子：	
	//移除名为anim1的动画
	ani. removeAccessoryAnimation("anim1");
	


####  containAnimation(animationName)
>查询是否存在动作

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| ------------- 
animationName | string | 动作名|

返回值：

  类型 |名称 | 备注
 ------------- | -------------| ------------- 
boolean | 是否存在动作 | 无

例子：	

	var isExist = ani.containAnimation("anim1");
	



####  setAnimation(track, name, loop)
>播放动画 


参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
track  | number | 索引id |  
name  | string | 动画名 |  
loop | boolean | 是否循环播放|

返回值：无

例子：
	
	//播放动画，并传入track 为1，用以表示该次播放
	ani.setAnimation(1,"anim1",true)
	




####  setStartCallback(func)
>设置动画开始时的函数回调


参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
func  | function | 回调函数 |  

返回值：无

例子：

	ani.setStartCallback(	 function (animName,trackId,skeletonAnimation)
		{
	   		 BK.Script.log(0,0,"Start Event Callback");
		});


####  setCompleteCallback(func)
>设置动画播放完一次后 的函数回调


参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
func  | function | 回调函数 |  

返回值：无

例子：

	ani.setCompleteCallback(	 function (animName,trackId,skeletonAnimation)
		{
		    BK.Script.log(0,0,"Complete Event Callback");
		});


####  setEndCallback(func)
>设置动画播放完成 即将播放其他动画 的函数回调


参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
func  | function | 回调函数 |  

返回值：无

例子：

	ani.setEndCallback(function (animName,trackId,skeletonAnimation)
		{
		    BK.Script.log(0,0,"End Event Callback");
		});


####  update(duration)
>设置动画向前播放



参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
duration  | number | 向前更新时间 |  单位为秒

返回值：无

例子：

	//例如整个动画时长为1s，当前已播放0.7秒，调用下方函数则会前进至最后一帧
	ani.update(0.3);


#### getSlotNames()   
>获取所有slot名字
>
> <font color=#ff0000>手机QQ版本 7.2.0</font>

参数：无

返回值：


 类型 |名称 | 备注
------------- | -------------| -------------
 Array<String> | 所有slot名字 | 
 
 
例子：
	
	//获取slot名字数组
	var names = ani.getSlotNames();


#### getBoneNames()
>获取bone名字数组
>
><font color=#ff0000>手机QQ版本 7.2.0</font>

参数：无

返回值：


 类型 |名称 | 备注
------------- | -------------| -------------
 Array<String> | 所有bone名字 | 
 
 
例子：
	
	//获取bone名字数组
	var bones = ani.getBoneNames();
	
####  setBoneScale(boneName,scaleX,scaleY)
>设置骨骼大小
>
><font color=#ff0000>手机QQ版本 7.2.0</font>

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
boneName  | string | 骨骼名字 | 
scaleX  | number | x方向大小 |  
scaleY  | number | y方向大小 |  

返回值：无

例子：

	//例如将右手放大2倍
	ani.setBoneScale("Hand_Right",2.0,2.0);

####  getAttachmentBySlotName(slotName)
>根据slot名称获取attachment名称
>
><font color=#ff0000>手机QQ版本 7.2.0</font>

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
slotName  | string | slot名称 | 

返回值：

 类型 |名称 | 备注
------------- | -------------| -------------
 string | attachment名称 | 

例子：

	//根据slot获得attachment
	var eyeAttMnt = ani.getAttachmentBySlotName("Eyes");


####  setAttachmentBySlotName(slotName,attachmentName)
>设置attachment至对于的slot中
>
> 注意不可在播放动作时设置attachment，因播放动作过程实际是动态改变各个bone与slot的过程，此时再次修改slot的attachment，会导致动作紊乱。
> 
> <font color=#ff0000>手机QQ版本 7.2.0</font>

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
slotName  | string | slot名称 | 
attachmentName  | string | attachment的名字 | 设置为null或undefined时表示去除attachment

返回值：无

例子：

	//根据slot名设置attachment，第二个参数赋值undefined、null表示隐藏
	ani.setAttachmentBySlotName("Eyes",null);
	ani.setAttachmentBySlotName("Eyes",eyeAttMnt);


####  setBonePosition(boneName,position)
>设置骨骼位置
>
><font color=#ff0000>手机QQ版本 7.2.5</font>

参数 ：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
boneName  | string | 骨骼名称 | 
position  | Object | 位置 | 相对于父骨骼的坐标

返回值：无

例子：

```
ani.setBonePosition('Upperarm_Left01',{x:100,y:100})
```


####  getBonePosition(boneName)
>获取骨骼位置
>
><font color=#ff0000>手机QQ版本 7.2.5</font>

参数 ：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
boneName  | string | 骨骼名称 | 

返回值：

 类型 |名称 | 备注
------------- | -------------| -------------
Object | 位置 | 相对于父骨骼的坐标

例子：

```
var pos =  ani.getBonePosition("Skirt_Left01");
BK.Script.log(0,0,"x:"+pos.x + " y:"+pos.y);
```



####  setBoneScale(boneName,scale)
>设置某个骨骼的缩放比
>
><font color=#ff0000>手机QQ版本 7.2.5</font>

参数 ：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
boneName  | string | 骨骼名称 | 
scale  | Object | 缩放比 | 

返回值：无

例子：

```
//将右手放大2倍
ani.setBoneScale("Hand_Right",{x:posX,y:posY})
```


####  getBoneScale(boneName)
>获取某个骨骼的缩放比
>
><font color=#ff0000>手机QQ版本 7.2.5</font>

参数 ：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
boneName  | string | 骨骼名称 | 

返回值：

 类型 |名称 | 备注
------------- | -------------| -------------
Object | 缩放比 |

例子：

```
var scale = ani.getBoneScale('Upperarm_Left01');
var scaleX = scale.x;
var scaleY = scale.y;
```



####  setBoneRotation(boneName,rotation)
>设置骨骼的旋转角度
>
><font color=#ff0000>手机QQ版本 7.2.5</font>

参数 ：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
boneName  | string | 骨骼名称 | 
rotation  | number | 旋转角度 | 

返回值：无

例子：

```
//将骨骼放大2倍
ani.setBoneScale("Hand_Right",{x:posX,y:posY})
```


####  getBoneRotation(boneName)
>获取骨骼的旋转角度
>
><font color=#ff0000>手机QQ版本 7.2.5</font>

参数 ：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
boneName  | string | 骨骼名称 | 

返回值：

 类型 |名称 | 备注
------------- | -------------| -------------
 number | 旋转角度

例子：

```
var rotation = ani.getBoneRotation('Upperarm_Left01');
```



####  setAccessoryColor(accType,color)
>设置某个装扮的颜色
>
><font color=#ff0000>手机QQ版本 7.2.5</font>

参数 ：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
accType  | string | 装扮类型 | 可通过accessoryTypes属性获取
color  | Object | 颜色 | 


返回值：无

例子：

```
//将厘米秀上衣设置成黄色
ani.setAccessoryColor('TopSuit',{r:1,g:1,b:0,a:1})
```


####  hittestAccessory(accType,worldPoint)
>判断某件装扮是否被点击
>
><font color=#ff0000>手机QQ版本 7.2.5</font>

参数 ：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
accType  | string | 装扮类型 | 可通过accessoryTypes属性获取
worldPoint  | Object | 检测点 | 世界坐标点


返回值：无

例子：

```
//检测厘米秀小人上衣有无被点击
ani.hittestAccessory('TopSuit',{x:x,y:y})
```


##Q&A
###Q:accessory是什么？
A:厘米秀装扮部件。厘米秀的小人由骨骼+7件装扮组合而成。7件装扮分别为'FaceSuit'脸, 'BackSuit'背饰, 'BottomSuit'下装, 'FaceOrnament'脸饰, 'TopSuit'上装, 'HairType'发饰七种装扮。开发者可以使用BK.SkeletonAnimation.accessoryTypes获取所有的装扮类型名称


熟悉spine的都知道spine中有几个基础的概念，bone，slot，attachment，而accessory与其中的关系相当于多个attachment的组合。即accessory隶属于多个attchment。

<font color=#ff0000>需要注意的是对于普通的spine动画，并不存在accessory</font>



### 例子
查看 script/demo/spine/skeletonAnimation_demo.js