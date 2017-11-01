# 5.2 成绩上报与查询
游戏成绩数据上报与查询 （例子代码sso_demo.js）

游戏内成绩的上报、查询，统一使用以下接口进行上报。
`BK.MQQ.SsoRequest.send(data,cmd)`

使用以下接口进行回调的监听
`BK.MQQ.SsoRequest.addListener`

例如:

```
	//请求数据
    var cmd = "apollo_aio_game.get_room_info_3rd";
    var data = {
        "cmd" : cmd,
        "XXX1" : 1111,
        "XXX2" : 2222,
    };

    BK.MQQ.SsoRequest.addListener(cmd,undefined,function(errCode,cmd,data){
	    //回包数据
         if(data.data){
           	
         }
    });

    BK.MQQ.SsoRequest.send(data,cmd);
```

## 1. 成绩上报
为防止游戏数据造假，开发进行游戏成绩上报时，需上报游戏内所有人的游戏成绩。

###此处需要注意版本号的设置

<font color=#ff0000>版本号格式为“x.y”，x、y为整数，可以是1位或多位整数,点前面的x表示游戏资源版本,点后面的y用以表示排行积分是否重新计算，若y改变，则排行积分重新计算。
 </font>


###请求：


```
var cmd = "apollo_aio_game.report_user_score_3rd" 
var data = {
    "cmd" : "apollo_aio_game.report_user_score_3rd",
    "from" : "ios",       //描述###请求来源或场景 h5.xxx.yyy/ios.xxx.yyy/android.xxx.yyy 用于后台统计
    "openId":"4558665DATRGFGFS455",   //上报用户的openId
    "gameId":1,           //游戏ID
    "version":"2.0",      //游戏版本
    "roomId" : 123,       //房间ID
    //具体的得分数据数组。数组中每个元素为一个用户的得分
　　"gData":[
　　     {
            //第一个用户的得分
　　         "openId":"4558665DATRGFGFS455",
　　         "scoreInfo":{
                    "score":4455,   //用户得分  必须上报
                    //附加参数，上报和使用都由第三方决定，最多支持5个附加参数，可选
                    "a1":1,
                    "a2":2,
　　               },
　　          "actInfo":{     //活动数据由第三方配置定义，key值统一用p1,p2,...此数据只用于活动，不会保存到用户的房间数据里, 现支持最多支持16个
　　                   "p1":1,    //参数0
　　                   "p2":5,    //参数1
　　              },
},
{
            //第二个用户的得分
　　         "openId":"SDJIIWJIEQWJ232389DA",
　　         "scoreInfo":{
                    "score":4455,   //用户得分  必须上报
                    //附加参数，上报和使用都由第三方决定，最多支持5个附加参数，可选
                    "a1":1,
                    "a2":2,
　　               },
　　          "actInfo":{     //活动数据由第三方配置定义，key值统一用p1,p2,...此数据只用于活动，不会保存到用户的房间数据里, 现支持最多支持16个
　　                   "p1":1,    //参数0
　　                   "p2":5,    //参数1
　　              },
           
           //第n个用户的得分 ...
　　     },
    ]
};
```
###回包:

```
errCode ，0表示成功其他为异常
data = {}
```

## 2. 获取房间内的用户成绩数据
###请求:

```
var cmd = "apollo_aio_game.get_room_info_3rd" 
var data = {
    "cmd" : "apollo_aio_game.get_room_info_3rd",
    "from" : "xxxxx",     //描述###请求来源或场景 h5.xxx.yyy/ios.xxx.yyy/android.xxx.yyy 用于后台统计
    "gameId":1,           //游戏ID
    "version":"2.0",      //游戏版本
    "roomId": 123,        //房间ID
};
```

###回包

```
errCode ，0表示成功其他为异常
data =
{
    "data": {
        "userRank": [
            {
                "openId":"100001", 
                "score":560,
                "rank":1,
                "a1":123,
                 ...
                "a5":123,
            }
             ...
        ]       
    }
}
```

## 3. 查询某个用户在一款游戏中的积分
###请求:

```
var cmd = "apollo_aio_game.get_user_gameinfo_3rd" 
var data = {
        "cmd" : "apollo_aio_game.get_user_gameinfo_3rd",
        "from" : "xxxxx",     //描述###请求来源或场景 h5.xxx.yyy/ios.xxx.yyy/android.xxx.yyy 用于后台统计
        "gameId":1,           //游戏ID
    　　 "toOpenId":"123",     //需要查询的openId（如果是查自己的数据，则不用传， 注意此参数仅在游戏当天有用）
    　　 "version":"2.0",      //游戏版本
        "cycleNum":0           //周期序号 【0-本周期， 1-上一周期， 2-上两周期】 目前后台会保存三个周期的游戏数据，例如若一个周期为1星期，则0代表本星期的数据。
    }; 

```

###回包

```
errCode ，0表示成功其他为异常
data = {
"data": {
         "toOpenId":"12345556645DAGADFGAD"  //###请求有传入toOpenId则有返回，没传入则无此字段返回
        "myPoint":800                 //用户积分
    }
}
```

## 4.查询用户货币余额

###请求：


```
var cmd = "apollo_aio_game.get_user_gameinfo_3rd" 
var data = {
    "cmd" : "apollo_aio_game.get_user_curreInfo",
    "from" : "xxxxx",       //描述###请求来源或场景 h5.xxx.yyy/ios.xxx.yyy/android.xxx.yyy
　　"mask":1                         //mask取值如下
}
```
其中mask的取值如下

```
1- 获取游戏点券
2-获取游戏二级货币（暂不能用）
```

###回包

```
errCode ，0表示成功其他为异常
data = {
    "data": {
	     "curreInfo":[
	        {
	             "curreType":3          //取值含义见下文
	             "balance":2000     //用户拥有的该货币数量
	        }
	     ]
    } 
}
```
curreType取值含义

```
3- 游戏点券
```


## 数据上报

用于将上报用户行为，游戏具体数据等信息收集

###请求：
```
var cmd = "cs.report_data_2_compass.local" 
var data = { 
	actionName:"",
	enter:"",
	result:"",
	r2:"",
	r3:"",
	r4:"",
	r5:""
}
```

###回包

上报请求无回包