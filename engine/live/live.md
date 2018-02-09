# 多人音视频/直播

厘米游戏在手Q 7.3.5开始支持多人音视频

需要注意的是厘米游戏不额外提供音频、视频云服务费用，如开发商需使用本功能，需自行购买腾讯云的[互动直播服务](https://cloud.tencent.com/document/product/268)。并将对应视频云服务的appid告知厘米游戏团队，与对应游戏匹配，才可正进行游戏。


### 搭建步骤

1.购买[腾讯云互动直播服务](https://cloud.tencent.com/document/product/268)

2.将云服务的appid、流控参数告知厘米秀团队。厘米秀游戏后台会将该appid与游戏对应的gameid进行匹配。

[AppId以及流控参数查询连接](https://console.qcloud.com/ilvb)
![](./appid.jpg)

![](./da19xE1AREeUMUX.jpg)
![](./alGAD0H5SyWKM2g.jpg)

3.配置完成后，在对应的游戏即可调用音视频接口。

4.如仅想在测试环境测试音视频功能，可以使用xcode工程进行调试。

### 开发必看

#### 1.音视频房间

使用多人音视频功能时，需理解<font color=red>音视频房间</font>的概念。
通过多人加入相同的音视频房间，则可实现多人音频、视频聊天。
此处需与<font color=blue>厘米秀房间</font>区分开来。

此处并无严格的音频房间、视频房间，因房间内音频和视频功能均是可选的，本文统一<font color=red>音视频房间</font>。

通过进退房间接口。可以实现进退音视频房间。

#### 2.identifier信号标识

每个音频、视频信号源都有一个唯一的标识。

#### 3.音视频房间逻辑

代码 script/core/basics/av.js中的QQ.QQAVManager对象封装了对于音视频的功能设置接口。

音视频房间进出逻辑大致为三个步骤

**初始化**(初始化音视频配置，对应BK.QAVManager.initQAVRoom) ->

**进入音视频房间**（进入音视频房间，对应BK.QAVManager.enterQAVRoom）->

**离开音视频房间** （离开音视频房间，对应BK.QAVManger.exitRoom）


如果重新进入进出房间都需要重新走 **初始化** ->**进入房间**->**离开房间**逻辑

### 自动加入音视频房间模式

场景：游戏开黑

如果游戏方不想理会复杂的进出房间逻辑，仅仅想在游戏中简单的加入多人音频聊天，可以使用本模式。

开发者仅需要直接打开麦克风，和扬声器便可直接说话与听房间内其他人讲话。

本模式的原理是，在加入<font color=blue>厘米游戏房间</font>后，获取本游戏依赖的appid（”搭建步骤二“中appid），并自动加入<font color=color>音频房间</font>。引擎自动会帮助加入对应的音频房间。

<font color=color>本方式主要非常注意的是必须在加入厘米秀房间后，才能正常使用！</font>

代码参考:script/demo/basics/multi_audio_video_demo.js

### 自主控制音视频房间流程模式

场景：娃娃机

对于需要多次进入<font color=color>音视频房间</font>，又期望值只保留一个<font color=blue>厘米游戏房间</font>的场景，如娃娃机，可以通过BK.QAVManager的initQAVRoom、enterQAVRoom、exitRoom 接口进行音视频房间流程控制。

例子：

```
BK.Script.loadlib("GameRes://script/core/basics/av.js");
var cfg = {
    sdkAppId: 1400035750,
    accountType: 14181,
    avRoomId: 122333,
    gameRoomId: 54321,
    selfOpenId: GameStatusInfo.openId
};
BK.QQAVManager.initQAVRoom(cfg, function (initErrCode, initCmd, initData) {
    if (initErrCode == 0) {
        BK.Script.log(0, 0, "initQAVRoom init succed");
        this.enterQAVRoom(cfg, function (errCode, cmd, data) {
            if (errCode == 0) {
                BK.Script.log(0, 0, "initAndEnterRoom enterRoom succ!");
                this._hasSuccEnter = true;
            }
            else {
                BK.Script.log(0, 0, "initAndEnterRoom enterRoom failed!");
            }
        }.bind(this));
    }
    else {
        BK.Script.log(0, 0, "initQAVRoom failed cmd:" + initCmd + " errCode:" + initErrCode + " data:" + JSON.stringify(initData));
    }
}.bind(this));

```

代码例子：
`
BK.Script.loadlib("GameRes://script/demo/basics/multi_audio_video_demo_flow.js")`

### 多人视频
使用多人视频展示需依赖
BK.Script.loadlib("GameRes://script/core/basics/av.js");

##### 查看本地摄像头信号

进入<font color=color>音视频房间</font>后,使用下面代码可以接收本地摄像头信号

```
//1.打开接受本地摄像头信号开关
BK.QQAVManager.setLocalVideo(true); 
//2.创建摄像头view，默认identifier标识监听自己的
var avCamera = BK.AVCamera.start({
    identifier: "", // unique id (openId)
    width: 300,
    height: 300,
    scaleSample: 0.125,
    needFaceTracker: false,
    //parent: nil, // 父亲节点，默认为root
    position: {x: 300, y: 300, z: 0}, // 相对于父亲左下角的坐标
    onPrePreview: function(frameData) {
        BK.Script.log(1, 0, "features = " + JSON.stringify(frameData.faceFeatures));
    }
});
```
例子代码：

`BK.Script.loadlib("GameRes://script/demo/basics/multi_audio_video_demo.js")`

##### 查看他人视频信号

加入音视频房间后，调用BK.QQAVManager.watchRemoteVideo主动监听某几路信号，并创建对应的view用于展示信号。其中例子中idList元素，当该路信号为其他玩家时，传入openId,若是其他设备时传入对应的identity号。

```
//1.请求获取
var idList = ["012345678901234567890123456789AB"]
BK.QQAVManager.watchRemoteVideo(idList);
//2.创建view用于暂时信号
var identifier = idList[0];
var pos = {x:0,y:0};
var height = 400;
var width = 300;
var othersView = new BK.QAVView(identifier, width, height, true, undefined, pos,undefined);
```

代码例子：
`BK.Script.loadlib("GameRes://script/demo/basics/multi_audio_video_demo_ui.js")`