# 3.4 Q&A

#### Q: 第三方可以使用自己websocket或其他方式连接自己的服务器吗？
A：不可以。目前外部团队只能使用protocol.js指定的接口房间的管理。

#### Q：创建游戏并加入游戏后，有什么协议可以发送数据给房间内的所有人？比如加入房间后，告诉房间所有人已经准备好了
A:使用BK.Room.sendBroadcastData可以广播数据给房间所有人。该接口在玩家加入房间后，到游戏结束都可以发送。

#### Q:帧同步协议什么时候才可以用
A:帧同步协议必须在游戏开始后，即房主调用BK.Room.startGame后才可进行。

#### Q：参加者可以触发开始游戏吗？
A：不可以。只能房主触发。

#### Q:帧同步的推送频率如何配置？
A:帧同步帧频配置在后台。如需修改需申请。目前默认为每秒10帧

#### Q:创建房间时后台返回的房间号是随机的，开发工程下参加者无法知道房间号，怎么进行多人调试？
A:将BK.Room.environment设置为2。房主可以使用createAndJoinFixedRoom创建一个固定房号的房间。

#### Q:一次同步帧中能消耗多个道具吗？
A:不可以。一次同步帧中仅仅能消耗一个道具

#### Q:游戏中房主掉线退出房间，房间会被销毁吗？
A:不会。房主的概念平台只用于创建和开始游戏，之后就不依赖了。因此游戏开始后房主掉线和一般用户掉线，从后台角度看没差别

#### Q: Xcode开发工程下如何模拟参加者加入游戏？
A: 房主使用createAndJoinFixedRoom创建一个（BK.Room.environment属性需设置为 NETWORK_ENVIRONMENT_DEMO_DEV ）固定房间号的房间，参加者使用queryAndJoinRoom加入房间即可。

例如：如指定房间号12345678，使用一台机器房主使用createAndJoinFixedRoom创建该房间号创建成功后，参加者使用另一台机器使用12345678的roomid调用queryAndJoinRoom加入房间


#### Q:某个参加者加入房间后，房内其他玩家如何监听到其加入房间的消息？
A:新玩家加入后，后台会再次推送joinRoomCallback。
例如：
房主会再次收到createAndJoinRoom(gameId,masterOpenId,callback) 中的callback函数回调

其他玩家会收到
queryAndJoinRoom(gameId,roomId,joinerOpenId,callback) callback函数回调。

从callback函数中可以获取当前房间的所有人信息
以加入参加者为例，下代码可以查看房间内所有人

 ```
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
```
