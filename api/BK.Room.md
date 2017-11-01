
## BK.Room
> 游戏管理类

### 成员变量
变量  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
gameId | number | 游戏id |
roomId | number | 房间id |
mId | string | 当前用户的openId |
ownerId | string | 房主的openId |
status | number | 房间状态 | 1 已创建房间,2 游戏中房间
environment | number | 网络环境 | NETWORK_ENVIRONMENT_QQ_RELEASE /0 手Q环境正式发布、NETWORK_ENVIRONMENT_QQ_DEBUG /1 手Q环境调试环境、NETWORK_ENVIRONMENT_DEMO_DEV/2 demo工程开发环境



### 成员方法
#### createAndJoinRoom(gameId,masterOpenId,callback)
 > 房主创建并加入房间

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
gameId | number |  游戏id | 
masterOpenId | string |  创建者openid | 
callback | function | 回调函数 | function (statusCode,room) 其中statusCode  参考文档最下方错误码表。room为BK.Room对象

返回值：无

例子：
		
	
	var game = new BK.Room();
	BK.Director.ticker.add(function(ts,duration){
    	game.updateSocket();
	});
	game.createAndJoinRoom(gameId,masterOpenId,function (statusCode,room) {
    if(statusCode == 0){
        BK.Script.log(0,0,"加入房间成功");
        BK.Script.log(0,0,"当前玩家：");
        room.currentPlayers.forEach(function(player) {
			BK.Script.log(1,1,"recvJoinRoom opeid:"+player["openId"] ); //openid
			BK.Script.log(1,1,"recvJoinRoom joinTs:"+player["joinTs"] );//加入的时间戳
			BK.Script.log(1,1,"recvJoinRoom status:"+player["status"] );//玩家状态 1用户在游戏中 2 用户加入后离开 3 用户等待加入
		}, this);
	}); 


#### createAndJoinFixedRoom(gameId,masterOpenId,fixedRoomId,callback)

> 房主使用固定房间号创建房间。
> environment属性需设置为 NETWORK_ENVIRONMENT_DEMO_DEV 才可使用

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
gameId | number | 游戏id |  
masterOpenId | string | 房主openid |  
fixedRoomId | number | 房间号|  
callback | function | 请求回调 |  每次有人加入时都会回调

返回值： 无

例子：

	var game = new BK.Room();
	game.isDebug = true;
	//添加到ticker中进行定时刷新
	BK.Director.ticker.add(function(ts,duration){
	    game.updateSocket();
	});
	var fixedRoomId = 231;
	game.createAndJoinFixedRoom(gameId,masterOpenId,fixedRoomId,function (statusCode,room) {
	    if(statusCode == 0){
	        BK.Script.log(0,0,"固定房间号-加入房间成功");
	        BK.Script.log(0,0,"当前玩家：");
	        room.currentPlayers.forEach(function(player) {
				BK.Script.log(1,1,"recvJoinRoom opeid:"+player["openId"] );
				BK.Script.log(1,1,"recvJoinRoom joinTs:"+player["joinTs"] );
				BK.Script.log(1,1,"recvJoinRoom status:"+player["status"] );
			}, this);
	})

#### queryAndJoinRoom(gameId,roomId,joinerOpenId,callback)
> 参加者加入房间

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
gameId | number | 游戏id |  
roomId | number | 房间号|  手Q环境中从GameStatusInfo.roomId获取
joinerOpenId | string | 参加者openid |  
callback | function | 请求回调 | 每次有人加入时都会回调

返回值： 无

例子：

	 var game2 = new BK.Room();
	 game2.isDebug = true;
	 var roomId =  255235804494484; //
	 //添加到ticker中进行定时刷新
	 BK.Director.ticker.add(function(ts,duration){
	     game2.updateSocket();
	 });
	
	 //PS:. 房主在参加者加入房前 ，不能startGame,否则无法加入房间
	 game2.queryAndJoinRoom(gameId,roomId,joinerOpenId,function(statusCode,room){
	     if(statusCode == 0){
	         BK.Script.log(0,0,"queryAndJoinRoom statusCode:"+ statusCode);
	        BK.Script.log(0,0,"当前玩家：");
	        room.currentPlayers.forEach(function(player) {
	                                    BK.Script.log(1,1,"recvJoinRoom opeid:"+player["openId"] );
	                                    BK.Script.log(1,1,"recvJoinRoom joinTs:"+player["joinTs"] );
	                                    BK.Script.log(1,1,"recvJoinRoom status:"+player["status"] );
	                                }, this);
	     }else{
	         BK.Script.log(0,0,"加入房间失败。statusCode:"+statusCode);
	     }
	 });




#### startGame(callback)
 > 开始游戏

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
callback | function | 回调函数 | function (statusCode)statusCode  参考文档最下方错误码表

返回值：无

例子：

	 game.startGame(function (statusCode) {
      BK.Script.log(0,0,"开始游戏！statusCode:"+statusCode);
	};

#### setStartGameCallback(callback)
 > 监听开始游戏事件

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
callback | function | 回调函数 | function (statusCode)statusCode  参考文档最下方错误码表

返回值：无

例子：

	 game.setStartGameCallback(function (statusCode) {
      BK.Script.log(0,0,"开始游戏！statusCode:"+statusCode);
	};	
	
#### leaveRoom(callback)
 > 离开游戏

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
callback | function | 回调函数 | 形如 function (statusCode，leaveInfo) 其中statusCode  参考文档最下方错误码表。leaveInfo 为Object类型，只有logOutId属性，为离开者openid

返回值：无

例子：

	 game.leaveRoom(function (statusCode, leaveInfo) {
      BK.Script.log(0,0,"离开游戏！statusCode:"+statusCode);
	};
	
	

#### syncOpt(statusBuf,optBuf,extendBuf,itemListBuf,callback)

 >  发送帧同步操作命令
 
 参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
statusBuf | BK.Buffer | 预留buffer| 
opt | BK.Buffer | 自定义数据 | 用户需要同步的数据，开发者可以自定义。发送后可在帧同步监听函数中获取
extendBuf | BK.Buffer | 自定义数据 | 扩展预留buffer
itemListBuf | BK.Buffer | 道具buffer | 
callback | function | 回调 | 

返回值：无


例子：
	
	 //预留字段，暂时填0
    var status = new BK.Buffer(1,1);
    status.writeUint8Buffer(0);

    //用户定义的字段
    var str = "ABC";
    //往buffer中写入string时，需多申请3个字节大小
    var opt = new BK.Buffer(str.length+3,1);
    opt.writeStringBuffer(str);

    BK.Script.log(1,1,"sync !!!!!send frame  1");
    //预留字段
    var extend = new BK.Buffer(1,1);
    extend.writeUint8Buffer(0);
    
    //send 
    game.syncOpt(status,opt,extend,undefined,function(ackSeq){
        BK.Script.log(1,1,"sync !!!!!后台确认号recv ack= "+ackSeq);
    });    
	
#### setFrameSyncListener(listener)
 > 设置帧同步监听函数

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
listener | function | 监听函数 | 形如 function func(frameDataArray)

其中监听函数中frameDataArray为一个二维数组。
第一维 代表当前推送有n帧
第二维 代表当前帧中有m个用户的操作


返回值：无

例子：
	
	game.setFrameSyncListener(function (frameDataArray) {
	    var frameCount = frameDataArray.length;
	    for (var index = 0; index < frameDataArray.length; index++) {
	        var playersOpt  =frameDataArray[index];
	        
	        if(playersOpt){
	            for (var i = 0; i < playersOpt.length; i++) {
	                var player = playersOpt[i];
					   var openId = player.openId;   //用户openid
						var itemId = player.itemId;   // 用户使用的道具id
						var buff =  player.dataBuffer.;// BK.Buffer对象。用户发送的自定义对象.
						
						//此处的dataBuffer即是 sendSyncOpt例子中所说的 ope。此处使用readUint8Buffer后，取出的值便是 1111
						 var  cmd = player.dataBuffer.readUint8Buffer();
	            }
	        }
	    }
	};
	

#### sendBroadcastData(buff)
>向房间内所有玩家发送广播消息

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
buff | BK.Buffer |  发送的数据 |  

返回值：无

例子:
	
	 var req = 'This is a message!';
	 //当BK.Buffer作为网络传输载体，且可能混杂多种不同类型数据时，需要额外分配3个自己
    var data = new BK.Buffer(req.length+3);
    data.writeStringBuffer(req);
    game.sendBroadcastData(data);


#### setBroadcastDataCallBack(callback)
> 监听广播消息

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
callback | function | 回调函数 |  

返回值：无

例子:
	
	game.setBroadcastDataCallBack(function (fromId,))



#### setUserData(buff,callback)
>设置当前游戏云端存储
>
>目前为每个用户每个游戏可存储的大小为64K空间。如需扩容，需联系腾讯后台开发人员

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
buff | BK.Buffer | 设置的的数据 |  

返回值：无

例子:
	
	 game.setUserData(userDataBuf,function(retCode){
			BK.Script.log(1,1,"设置云端存储 返回 = "+retCode );
	});


#### getUserData(roomId,callback)
>获取当前游戏云端存储
>

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
roomId | number |  房间id |此处传入roomid是用于后台标识，后台存储的还是以游戏为单位
callback | function |  回调函数 | 返回错误码查看后面

返回值：无

例子:
	
	//获取云端存储数据
	game.getUserData(room.roomId,function (retCode,buf) {
        BK.Script.log(1,1,"设置云端存储 返回 = "+retCode );
	});


#### matchGame(gameId,OpenId,callBack)
 >开始陌生人匹配

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
gameId | int | 游戏id 
openId | String | 玩家id 
callBack | function | 回调函数 | 形如 function func(statusCode)

这里的callback是匹配之后后台直接返回加入匹配队列成功，真正匹配成功还需要使用查询接口做轮询

返回值：无

例子(结合查询接口)：

    var isMatchGame = 3;//GameStatusInfo.gameMode;  这里的gameMode=3表示游戏启动方式是陌生人匹配
    var shouldQueryMatch = false;
    var tickerCount = 0;
    
    if(isMatchGame == 3){
        game.matchGame(GameStatusInfo.gameId,GameStatusInfo.openId,function(statusCode){
            if(statusCode == 0){
                shouldQueryMatch = true;
                BK.Script.log(1,1,"matchGame callBack");
            }

        });
    }
    //添加到ticker中进行定时刷新
    BK.Director.ticker.add(function(ts,duration){
        tickerCount++;
        if(shouldQueryMatch && tickerCount%180 == 0){
            game.queryMatchGame(GameStatusInfo.gameId,GameStatusInfo.openId,function(statusCode){
                if(statusCode == 2011){
                    shouldQueryMatch = false;
                    BK.Script.log(1,1,"queryMatchGame callBack fail----timeout");
                    return;
                }
                if(game.roomId > 0){  //每180帧去轮询一把  如果匹配成功，房间号会直接写入game.roomId，再拿这个roomId走正常查询房间流程
                    shouldQueryMatch = false;
                    BK.Script.log(1,1,"queryMatchGame callBack succ");
                } else{
                    BK.Script.log(1,1,"queryMatchGame callBack fail");
                }
            });
        }
        game.updateSocket();
    });
    

#### queryMatchGame(gameId,openId,callBack)
>查询匹配
>

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
gameId | int | 游戏id 
openId | String | 玩家id 
callBack | function | 回调函数 | 形如 function func(statusCode)

这里是在加入匹配队列后去轮询,回调函数里面的timeout如果为1代表匹配超时了，应该取消轮询，如果没有超时则判断game.roomId的值，这个值为0则继续轮询，如果大于0则进入查询房间的正常流程

例子：
同matchGame的例子



#### sendKeepAlive()
 > 发送心跳

参数：无
返回值：无


## 后台错误码
错误码  | 说明 
------------- | ------------- |
0| 成功|
1000| 包体长度检查非法|
1001| 魔术字非法|
1002| 前端命令字非法|
1003| 后端命令字非法|
1004| 后端命令来源非法|
1005| FromId非法|
1006| ST解密失败|
1007| 使用STKEY界面请求包失败|
1008| ST过期|
1009| 系统异常|
1010| 版本太低|
1011| 请求频率限制|
1012| 获取l5失败|
2001|初始化访问存储失败|
2002|查询存储失败|
2003|更新存储失败|
2004|删除存储失败|
2005|获取服务配置错误|
2006|通知游戏网关创建失败|
2007|获取房间ID失败 或者 指定的房间ID不可用|
2008|非法命令|
2009|房间id不存在|
2010|在黑名单|
2011|陌生人匹配超时|
3000| 查询房间信息失败|
3001| 房间状态异常|
3002| 请求开始游戏的用户并非房主|
3003| 用户未在房间内|
3004| 更新时间戳异常|
3005| 请求登出LOGOUTID与fromid不一致|
3006| 当前服务器处于不可服务状态|
3007| 当前服务器活跃用户数超过限制|
3008| 当前服务器活跃房间数超过限制|
3009| 房间ID已经存在不能再创建|
3010| 用户离开房间处理失败|
3011| 用户加入房间发生系统异常|
3012| 用户重复加入房间|
3013| 房间已满员|
3014| 创建房间失败，系统异常|
3015| 玩家已经加入房间，不允许挑战影子|
4000| 下行消息转发失败|
4001| 上行消息转发失败|

##例子
位置：script/Demo/net/frameSync_demo.js**
