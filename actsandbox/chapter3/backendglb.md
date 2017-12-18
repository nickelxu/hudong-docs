# 后台支撑接口

### 后台支撑接口的作用

在开发活动后台逻辑时，需要读取当前的活动配置信息，用户的游戏信息以及用户参与活动的记录信息，支撑判断用户是否满足条件，并为用户发放奖品。这部分的功能都通过后台支撑接口来实现。


### 后台支撑接口列表

后台逻辑可调用的支撑接口列表如下，使用方法可以参考模拟器自带的logic.js

- 内部活动总体配置

| 接口名称 | 接口说明 | 接口功能 | 关键输入参数 |
| - | - | - | - | 
| getActConf | 查询活动信息接口 | 查询活动的配置信息和状态 | actid,openid |

- 内部用户游戏上报数据服务

| 接口名称 | 接口说明 | 接口功能 | 关键输入参数 |
| - | - | - | - | 
| getRecord | 查询游戏上报数据接口 | 查询游戏数据上报接口 | actid,openid |

- 内部用户公众号数据服务

| 接口名称 | 接口说明 | 接口功能 | 关键输入参数 |
| - | - | - | - | 
| getFollow | 查询关注关系接口 | 查询用户是否关注绑定公众号接口 | actid,openid |

- 内部用户活动数据服务

| 接口名称 | 接口说明 | 接口功能 | 关键输入参数 |
| - | - | - | - | 
| setActUsrdata | 设置活动用户数据接口 | 设置活动用户数据 | actid,openid,data,cas |
| getActUsrdata | 查询活动用户数据接口 | 查询活动用户数据 | actid,openid |

- 内部用户道具服务

| 接口名称 | 接口说明 | 接口功能 | 关键输入参数 |
| - | - | - | - | 
| isBuyItemToday | 查询用户当天是否买道具 | 查询用户当天是否买道具 | actid,openid |

- 内部活动虚拟积分

| 接口名称 | 接口说明 | 接口功能 | 关键输入参数 |
| - | - | - | - | 
| addUsrScore | 发放用户积分 | 增加用户的积分 | actid,openid,scoreid,scoretm |
| getUsrScore | 查询用户积分 | 查询用户的积分 | actid,openid,scoreid,scoretm |
| decUsrScore | 减少用户积分 | 减少用户的积分 | actid,openid,scoreid,scoretm |

- 条件检查辅助函数

| 接口名称 | 接口说明 | 接口功能 | 关键输入参数 |
| - | - | - | - | 
| condCheckScore | 检查积分是否满足条件 | 检查积分是否满足条件 | actid,openid,cond |
| condCheckFollow | 检查用户是否关注服务号 | 检查用户是否关注服务号 | actid,openid,cond |

- 奖品发放辅助接口

| 接口名称 | 接口说明 | 接口功能 | 关键输入参数 |
| - | - | - | - | 
| sendGameItem | 赠送用户道具 | 设置活动用户数据 | actid,openid,gift |
| sendScore | 赠送用户积分 | 赠送用户积分 | actid,openid,gift |

- 用户数据修改加锁

| 接口名称 | 接口说明 | 接口功能 | 关键输入参数 |
| - | - | - | - | 
| lockUsr | 加锁用户数据 | 加锁用户数据 | actid,openid |
| unlockUsr | 解锁用户数据 | 解锁用户数据 | actid,openid,cas |
