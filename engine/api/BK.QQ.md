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


#### reqCustomLogic(data,callback)
>开放api

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
data | json | 用户数据 | 
callback |function| 回调函数|

返回值：无

例子

	BK.Script.loadlib('GameRes://script/core/net/protocol.js');
	var data ={"gameid":2003, "data" : {"cmd" : "addex", "itemid" : 2025, "num" : 4}};
	BK.QQ.reqCustomLogic(data,function(errCode,cmd,data)
	{
	BK.Script.log(0, 0, "BK.QQ.reqCustomLogic errCode = " + errCode + " cmd = " + cmd + " data = " + JSON.stringify(data));
	
	})
	

#### uploadData(actionName,enter,result,param1,param2,pram3)

> 数据上报
> 


参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
action | string | 操作id，用来定义操作 |
enter | number | 定义操作场景 |
result | number | 定义操作结果 |
param1 | string | 拓展字段 |
param2 | string | 拓展字段 |
param2 | string | 拓展字段 |

返回值：无

例子：

```
BK.Script.loadlib("GameRes://protocol.js")
var actionName = "actionname"
var enter = 1;
var result = 1;
var param1 = "param111"
var param2 = "param222"
var param3 = "param333"
BK.QQ.uploadData(actionName,enter,result,param1,param2,param3);
```

#### getGameItemList(callback)
> 获取游戏所有道具

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
callback | Function | 回调函数 |

返回值：无

例子：

```
BK.QQ.getGameItemList(function(errCode,cmd,data){
    BK.Script.log(0,0," reveive sso cmd = "+ cmd)
    var itemList = [];
    if(data){
        if(data.data){
            if(data.data.itemList){
                data.data.itemList.forEach(function(element) {
                    var item = {    
                     "id":element.id,               //道具ID 
                     "name":element.name,           //道具名称
                     "consumed":element.consumed,   //是否消耗型【0-非消耗型 1-消耗型】
                     "uinque":element.uinque,       //是否绝版【0-非绝版，1-绝版】
                     "iconUrl":element.iconUrl,     //素材iconurl
                     "curreInfo":element.curreInfo  //价格数组 因支持多货币，每个元素为某种货币的价格
                    //  "curreInfo":[
                    //                     {
                    //                     "curreType":3,    //3-游戏点券 4-二级货币（暂不能用）
                    //                     "price":1000     //价格
                    //                     }]    
                     }
                    itemList.push(item);
                    BK.Script.log(0,0,"id ="+ item.id + " name="+item.name+ " consumed="+item.consumed+" unique="+item.uinque+ " iconUrl="+item.iconUrl + " curreInfo="+item.curreInfo) ;   
                }, this);
            }
        }
    }
})
```

#### getUserGameItems(data,callback)
>获取用户拥有的游戏道具

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
data | Object | 请求参数 |
callback | Function | 回调函数 |

返回值：无

例子：

```
var data = {
    "from": "ios",  //描述请求来源或场景 h5.xxx.yyy/ios.xxx.yyy/android.xxx.yyy 用于后台统计
    "gameId":3,
    "openId":"DASGTERDF126556365"
}

BK.QQ.getUserGameItems(data,function(errCode,cmd,data){
    BK.Script.log(0,0," reveive sso cmd = "+ cmd)
    var itemList = [];
    if(data){
        if(data.data){
            if(data.data.itemList){
                data.data.itemList.forEach(function(element) {
                                            var item = {
                                                "consumed": element.consumed,
                                                "iconUrl":  element.iconUrl, 
                                                "id": element.id, 
                                                "name": element.name, 
                                                "num": element.num
                                            }
                                            itemList.push(item);
                                            BK.Script.log(0,0,"consumed="+ item.consumed + " iconUrl="+item.iconUrl + " id="+item.id + " name="+item.name + " num="+item.num) ;   
                                        }, this);
            }
        }
    }
})
```

#### buyGameItems(data,callback)
>购买道具

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
data | Object | 请求参数 |
callback | Function | 回调函数 |

返回值：无

例子：

```
var itemID = 2025;
var itemNum = 20;

var data =  {
    "from" : GameStatusInfo.platform,//描述请求来源或场景 h5.xxx.yyy/ios.xxx.yyy/android.xxx.yyy 用于后台统计
　　 "gameId":GameStatusInfo.gameId,  //游戏ID
    "curreType":3,                   //3-游戏点券 4-二级货币（暂不能用）
　　"itemIdList":[                    //购买的道具列表
　　     { 
　　         "id":itemID,           //道具ID
　　         "num":itemNum          //道具数量
　　     }
　　]
}

BK.QQ.buyGameItems(data,function(errCode,cmd,data){
    BK.Script.log(0,0," reveive sso cmd = "+ cmd + " errCode = "+errCode)
    var itemList = [];
    if(data){
        if(data.data){
            //游戏ID
            if (data.data.gameId) {
                BK.Script.log(0,0,"gameId = "+data.data.gameId);
            }
            //使用的货币
            if (data.data.curreType) {
                BK.Script.log(0,0,"curreType = "+data.data.curreType);
            }
            //剩余货币
            if (data.data.currency) {
                BK.Script.log(0,0,"currency = "+data.data.currency);
            }
            //购买的道具列表
            if(data.data.itemList){
                data.data.itemList.forEach(function(element) {
                    var item = {    
                     "id":element.id,             //道具ID 
                     "num":element.num,           //道具名称
                     }
                    itemList.push(item);
                    BK.Script.log(0,0,"id ="+ item.id + " num="+item.num) ;   
                }, this);
            }

            //道具鉴权错误, 无错误时无此字段
            if (data.data.authRet) {
                var authRet = data.data.authRet;
                var failId = authRet.id; //道具ID
                var failRet = authRet.ret;//错误码   
                BK.Script.log(0,0,"authRet failId="+ failId + " failRet="+failRet) ; 
            }
        }
    }
});
```
