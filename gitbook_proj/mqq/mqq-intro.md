# 手机QQ接入流程




## 全局参数

脚本启动后可以从全局变量GameStatusInfo中拿到有关游戏的所有的参数。
```
GameStatusInfo = {
    "svrIp" : "14.17.42.125",       //游戏推荐ip。开发者可忽略
    "gameVersion" : "408.2",   //游戏版本号
    "isMaster" : 1,		            //是否房主，1房主，0参加者
    "dressPath" : [			    //厘米秀衣服路径
                   {
                   "atlas" : "\/Clothes\/1\/playRes\/dress",
                   "json" : "\/Clothes\/1\/playRes\/dress"
                   },
                   {
                   "atlas" : "\/Clothes\/2\/playRes\/dress",
                   "json" : "\/Clothes\/2\/playRes\/dress"
                   },
                   {
                   "atlas" : "\/Clothes\/3\/playRes\/dress",
                   "json" : "\/Clothes\/3\/playRes\/dress"
                   },
                   {
                   "atlas" : "\/Clothes\/4\/playRes\/dress",
                   "json" : "\/Clothes\/4\/playRes\/dress"
                   },
                   {
                   "atlas" : "\/Clothes\/5\/playRes\/dress",
                   "json" : "\/Clothes\/5\/playRes\/dress"
                   },
                   {
                   "atlas" : "\/Clothes\/6\/playRes\/dress",
                   "json" : "\/Clothes\/6\/playRes\/dress"
                   },
                   {
                   "atlas" : "\/Clothes\/7\/playRes\/dress",
                   "json" : "\/Clothes\/7\/playRes\/dress"
                   }
                   ],
    "gameId" : 3,          //游戏id
    "networkType" : 0,  //网络类型 1 电信 ，2 联通 ，3 移动  0: wifi或未知
    "roomId" : "0",          //房间号
    "platform" : "ios",    //平台类型
    "openId" : "72ED98114FE0D68FD23650B303B8AD80",  //当前用户的标识
    "spriteDesignHeight" : 368,   //厘米秀小人spine动画的设计高度
    "QQVer" : "7.1.0.0",		//手机qq版本
    "isFirstPlay" : 1,			//是否第一次玩
    "skltPath" : {			//厘米秀小人spine骨骼
        "atlas" : "\/Role\/0\/playRes\/role",
        "json" : "\/Role\/0\/playRes\/role"
    },
    "port" : 10060   //推荐端口 开发者可忽略
}```


## 手Q内消息交互
<font color=#ff0000>前置条件：调用接口时需预先加载protocol.js</font>

游戏在某些关键事件时需要通知手Q

1. 正在等待玩家加入  
调用BK.QQ.notifyGameTipsWaiting()
2. 玩家加入房间  
调用 BK.QQ.notifyGameTipsSomeOneJoinRoom(nick) 其中需要传入玩家昵称
3. 游戏即将开始
若游戏有倒计时结束后自动开始的逻辑，倒计时即将结束时需调用此代码
调用 BK.QQ.notifyGameTipsReady()
4. 游戏正在进行中
调用 BK.QQ.notifyGameTipsPlaying()
5. 游戏结束
调用 BK.QQ.notifyGameTipsGameOver()
6. 游戏内点击关闭按钮
调用 BK.QQ.notifyCloseGame() 
PS:游戏途中点击关闭时，为保持消息状态准确，需要上报。
7. 游戏内点击缩小游戏按钮
调用BK.QQ.notifyHideGame()
