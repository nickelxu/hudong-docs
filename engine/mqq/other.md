# 5.7 其他

## 获取昵称与头像链接

此接口为获取昵称与头像链接。若想直接从手Q中加载头像或者昵称查看 [2.20 BK.MQQ 手Q相关](http://119.29.134.111/api/BK.MQQ.html)

```
	var cmd = "apollo_aio_game.get_fri_base_info";
    var data = {
        "cmd" : cmd,
        "from" : GameStatusInfo.platform,       //描述请求来源或场景 h5.xxx.yyy/ios.xxx.yyy/android.xxx.yyy 用于后台统计
        "gameId":GameStatusInfo.gameId,         //游戏ID
    　　 "openIds":[
        　　     {
        　　          "openId":GameStatusInfo.openId,  //用户openId
        　　          "mask":2,             //昵称头像填2
        　　     }]
    };

    BK.MQQ.SsoRequest.addListener(cmd,undefined,function(errCode,cmd,data){
        BK.Script.log(0,0,"Error Code:"+errCode+" cmd:"+cmd+" data:"+data);
        if (errCode == 0 ) {
            if(data.data){
                if (data.data.friBaseData) {
                    for (var index = 0; index < data.data.friBaseData.length; index++) {
                        var subdata = data.data.friBaseData[index];
                        var openId = subdata.openId;
                        var nick = subdata.nick;
                        var head = subdata.head;
    
                        BK.Script.log(0,0,"OpenId :"+openId+ " nick:"+nick + " head:"+head);
                    }
                }
             }
        }
    });

    BK.MQQ.SsoRequest.send(“,"apollo_aio_game.get_fri_base_info");
```