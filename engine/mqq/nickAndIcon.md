# 5.7 头像与昵称


### BK.MQQ.Account.getNick(openID,callback)

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

### BK.MQQ.Account.getHead(openID,callback)

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