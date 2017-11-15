# 房间管理


#### 基本参数与概念

 参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
gameId | number | 游戏标识符 | 游戏唯一的标示符
openId | string | 用户标识符 | 由手机qq为用户分为的，每个用户唯一的一个标识符
roomId | number | 房间标识符 | 由服务器分配的房间Id


## 引用protocol.js
使用引擎提供的房间管理时，需主动引用 script/core/net/protocol.js

## BK.Room与BK.QQ
protocol.js中有封装有两个类BK.Room与BK.QQ，其中BK.Room是用于管理房间逻辑（创建、加入、离开房间），BK.QQ用于向手Q发送消息tips消息等。此处必须区分BK.MQQ，BK.MQQ是用于调起手Q原生功能。

## 网络环境设置

当前服务器共有三种，<font color=#ff0000>开发环境，手Q测试环境，手Q正式环境</font>。在各自环境进行使用protocol.js进行房间管理时，需正确的配置网络。

**开发环境**：在开发工程时使用，BK.Room.environment =  2。本环境开启后，不校验openId，可使用createAndJoinFixedRoom创建固定房间号的房间

**手Q测试**：使用手Q进行调试时使用，BK.Room.environment =1。本环境开启后，需校验gameId，openId正确性，房间创建仅通过createAndJoinRoom创建，不可以使用createAndJoinFixedRoom创建房间。

**手Q正式环境**：游戏正式发布时使用，BK.Room.environment = 0 或者不设置。与手Q测试环境的区别仅在于服务器ip不同。
