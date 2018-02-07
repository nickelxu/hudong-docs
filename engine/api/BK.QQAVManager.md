# 2.27 BK.QQAVManager 音视频管理
音视频对象为单例，本对象所有函数均为静态函数。

使用前预先调用
BK.Script.loadlib('GameRes://script/core/basics/qav.js');

### 静态方法


#### initQAVRoom(cfg, callback)
>初始化音视频


参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
cfg | Object | 初始化参数 |详情查看下方例子
callback | Function | 回调 |

例子

```
var cfg = {
  sdkAppId: 1400035750, //对应的视频云服务器appid。
  accountType: 14181,   //
  avRoomId: 122333,     //厘米秀房间 
  gameRoomId: 54321,    //
  selfOpenId: GameStatusInfo.openId
}
BK.QQAVManager.initQAVRoom(cfg, function (initErrCode, initCmd, initData) {
    if (initErrCode == 0) {
    	//初始化
    }
});
```

#### enterQAVRoom(cfg, callback)
>进入视频房间
>
>注意：调用此函数前需要调用initQAVRoom
	
参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
cfg | Object | 初始化参数 |详情查看下方例子
callback | Function | 回调 |

例子

```
var cfg = {
  sdkAppId: 1400035750, //对应的视频云服务器appid。
  accountType: 14181,   //
  avRoomId: 122333,     //厘米秀房间 
  gameRoomId: 54321,    //
  selfOpenId: GameStatusInfo.openId
}
BK.QQAVManager.enterQAVRoom(cfg, function (errCode, cmd, data) {
 if (errCode == 0) {
	 //加入成功
 }
});
```


#### initAndEnterRoom(cfg, callback)
> 初始并加入房间

```
var cfg = {
  sdkAppId: 1400035750, //对应的视频云服务器appid。
  accountType: 14181,   //
  avRoomId: 122333,     //厘米秀房间 
  gameRoomId: 54321,    //
  selfOpenId: GameStatusInfo.openId
}
BK.QQAVManager.initAndEnterRoom(cfg, function (initErrCode, initCmd, initData) {
    if (initErrCode == 0) {
    	//初始化
    }
});
```

#### exitRoom(callbck)	
>退房间

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
callback | Function | 回调 |

例子：

```
BK.QQAVManager. exitRoom(cfg, function (errCode, cmd, data) {
    if (errCode == 0) {
    	//退房间成功
    }
});
```

#### setMic(sw, callback)
> 设置麦克风(默认关闭)

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
sw | boolean | 开关 |
callback | Function | 回调 |

例子：

```
BK.QQAVManager.setMic(true, function (errCode, cmd, data) {
    BK.Script.log(1, 1, "BK.QQAVManager.setMic errCode:" + errCode + " cmd:" + cmd + " data:" + JSON.stringify(data));
});
```

#### setSpeaker(sw, callback)
> 设置扬声器(默认关闭)
	
参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
sw | boolean | 开关 |
callback | Function | 回调 |

```
 //扬声器
BK.QQAVManager.setSpeaker(true, function (errCode, cmd, data) {
    if (errCode == 0) {
        BK.Script.log(0, 0, "enableCamera Succ");
    }
    else {
        BK.Script.log(0, 0, "enableCamera Failed");
    }
    BK.Script.log(1, 1, "BK.QQAVManager.setSpeaker errCode:" + errCode + " cmd:" + cmd + " data:" + JSON.stringify(data));
});
```

#### switchCamera(cameraPos, callback);
>切换摄像头
>
>切换先需要启动相机

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
cameraPos | number | 相机位置 |0前置，1后置
callback | Function | 回调 |

例子
```
BK.QQAVManager.switchCamera(0, function (errCode, cmd, data) {
    BK.Script.log(1, 1, "BK.QQAVManager.switchCamera errCode:" + errCode + " cmd:" + cmd + " data:" + JSON.stringify(data));
});
```

#### enableCamera(enable, callback);
>启动相机

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
sw | boolean | 开关 |
callback | Function | 回调 |

例子：

```
//启动相机
BK.QQAVManager.enableCamera(true, function (err, cmd, data) {
    if (err == 0) {
        BK.Script.log(0, 0, "enableCamera Succ");
    }
    else {
        BK.Script.log(0, 0, "enableCamera Failed");
    }
});
```

#### setBeauty(beauty)
>设置美颜
>

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
beauty | number | 美颜值 |0-10， 0为不美颜（默认），10最高

例子：

```
BK.QQAVManager.setBeauty(8);
```

#### setLocalVideo(sw);
>使能本地信号发送开关
>
>置为true时，他人才能接收到本人的视频信号


参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
sw | boolean | 开关 |

例子：

`BK.QQAVManager.setLocalVideo(true);`


#### setRemoteVideo(sw)
>远端信号开关
>


参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
sw | boolean | 开关 |

#### watchRemoteVideo(openIdList);
>请求接受远端数据信号
>
>调用此函数需调用BK.QQAVManager.setRemoteVideo(true);

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
openIdList | Array<string> | 需要接受的信号对应的identity |

例子：

```
//请求接受某个玩家的信号（openId）,一个某个设备的信号（deviceIdentifier）
var openId = "012345678901234567890123456789AB"
vard deviceIdentifier ="ASJDINCIAHSEQWE";
var idList = [openId, deviceIdentifier];
BK.QQAVManager.watchRemoteVideo(idList);
```

#### changeQAVRole(role, callback)

> 切换角色
> 
参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
openIdList | Array<string> | 需要接受的信号对应的identity | 


#### isFrontCamera();
>是否前置摄像头

参数：无

返回值：

 类型 |名称 | 备注
 ------------- | -------------| -------------
 boolean |当前是否前置摄像头 |

例子：

 `var isFront = BK.QQAVManager.isFrontCamera() `
   