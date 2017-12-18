# 2.19 BK.MQQ 手Q相关
> 该类用于调起来手Q相关的功能

### BK.MQQ.SsoRequest
> 引擎与手机QQ交互类

### 方法

### send(data,cmd)
>向手机QQ发送请求
> 
> 
>cmd 参数需要以字面量标识，不可使用变量

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
data | object |请求的参数|  
cmd | string |请求的命令字|  参数需要以字面量标识，不可使用变量


返回值：无

例子：
	  
	  //获取游戏的道具
	  var cmd = "xxxxx.xxxx"
	  var data = {
	        "cmd":cmd,
	        "xx": "123",
	        "gameId":3
	  }
		//正确用法
	  BK.MQQ.SsoRequest.send(data,"xxxxx.xxxx");
		//错误用法
	  //BK.MQQ.SsoRequest.send(data,cmd);


### addListener(cmd,target,callback)

> 添加监听回调

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
cmd | string |命令字|  
target | Object |监听该请求绑定的对象|
callback | function |回调函数| 函数结构为 (errCode:number,cmd:string,data:Object)=>void
  

例子：

	var cmd = "apollo_aio_game.apollo_game_item"
	BK.MQQ.SsoRequest.addListener(cmd,undefined,function(errCode,cmd,data){
		//解析返回的数据...
    });
    


### removeListener(cmd,target)

> 移除某个对象对某个命令的事件监听

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
cmd | string |命令字|  
target | Object |待解除绑定的对象|
  

例子：

	var cmd = "apollo_aio_game.apollo_game_item"
	var target = ...;
	BK.MQQ.SsoRequest.removeListener(cmd,target);
    


### BK.MQQ.Account
> 手机QQ账户类

### 方法

### getNick(openID,callback)

> 获取昵称

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
openID | string |待查询用户的openid|  
callback | function |回调函数|

返回值：无  

例子：

```
function callback(openID,nick){
   BK.Script.log(0,0,"Nick :"+ nick);
}

BK.MQQ.Account.getNick(openID1,callback);
BK.MQQ.Account.getNick(openID2,callback);
BK.MQQ.Account.getNick(openID3,callback);
BK.MQQ.Account.getNick(openID4,callback);
```

#### 注意事项
函数并不会为每个openId绑定一个callback函数。若多次调用getNick函数，最终只会调用最后一次绑定的callback。因此开发者需要在此函数作分发动作

### getHead(openID,callback)

> 获取头像

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
openID | string |待查询用户的openid|  
callback | function |回调函数|

返回值：无  

例子：

```
function callback(openID, BuffInfo){
	if(openID == openID1)
	{
	    var buff = BuffInfo.buffer;
	    var width = BuffInfo.width;
	    var height = BuffInfo.height;
	    BK.Script.log(0,0,"headeBuff :"+ openId + " buff:"+ buff + " width:"+ width +" height:"+height);
	
	    var tex = new BK.Texture(buff,width,height);
	    var sp =new BK.Sprite(200,200,tex,0,1,1,1);
	    
	    BK.Director.root.addChild(sp);
    }else if(openID == openID2){
	    ...
    }
}
BK.MQQ.Account.getHead(openID1, callback);
BK.MQQ.Account.getHead(openID2, callback);
```

#### 注意事项
1. 同getNicke函数,引擎不会为每个openId绑定一个callback函数。若多次调用getNick函数，最终只会调用最后一次绑定的callback。因此开发者需要在此函数作分发动作。
2. 回调参数中使用BK.Buffer对象存储图片数据，若需显示到精灵中，需按例子中生成纹理，并绑定到精灵中



### BK.MQQ.Webview
### open(url)

> 打开一个网页

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
url | string |待打开的连接|  


返回值：无  

例子：

```
/**
 * 打开一个网页
 */
BK.MQQ.Webview.open("http://www.qq.com");
```
##例子
查看 script/demo/mqq/mqq_demo.js  与 script/demo/mqq/sso_demo.js 