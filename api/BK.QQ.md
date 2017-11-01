# 2.18 BK.QQ 房间手Q消息管理类
>本类用于与手q进行消息交换
>
>调用前请主动加载protocol.js



### 方法
#### notifyHideGame()
>通知手q,用户点击了缩小按钮

参数：无
返回值：无

#### notifyCloseGame()
>通知手q,用户点击了关闭按钮

参数：无
返回值：无


#### notifyReadyGame()
>通知手q,游戏即将开始

参数：无
返回值：无


#### notifyGameTipsWaiting()
>通知手q,等待玩家加入

参数：无
返回值：无


#### notifyGameTipsSomeOneJoinRoom(nick)
>通知手q,新玩家加入房间

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
nick | string | 昵称 | 
返回值：无

#### notifyGameTipsSomeOneLeaveRoom(nick)
>通知手q,玩家离开房间

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
nick | string | 昵称 | 
返回值：无


#### notifyGameTipsPlaying()
>通知手q,游戏进行中

参数：无
返回值：无


#### notifyGameTipsGameOver()
>通知手q,游戏已结束

参数：无
返回值：无


#### inviteFriend(wording)
>邀请好友加入游戏。支持手q/微信

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
wording | string | 文案 | 
返回值：无


#### checkPubAccountState(puin,callback)
>查询是否关注公众号

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
puin | string | 公众号id | 
callback | function |回调函数| 
返回值：无

例子
```
BK.QQ.checkPubAccountState(pubAccountId ,function(errCode, cmd, data) {
      BK.Script.log(0,0," callback errCode = "+errCode+ " cmd = "+ cmd + " data = "+ data);
      if(data.is_follow == 1){ //1已关注 0未关注
         
      }
  });
```

#### enterPubAccountCard(puin)
>进入公众号资料卡

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
puin | string | 公众号id | 


返回值：无
