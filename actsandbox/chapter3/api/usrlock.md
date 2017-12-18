# 用户加锁接口

### 接口列表

| 接口名称 | 接口说明 | 接口功能 | 关键输入参数 |
| - | - | - | - | 
| lockUsr | 加锁用户数据 | 加锁用户数据 | actid,openid |
| unlockUsr | 解锁用户数据 | 解锁用户数据 | actid,openid,cas |

### 用户数据加锁

- 接口名称

lockUsr

- 接口功能

给当前用户加锁，避免在发放奖品时被并发操作刷奖品。

- 输入参数

| 参数名 | 类型 | 名称 | 备注 |
| - | - | - | - | 
| actid | number | 活动ID | 不同的活动有不同的配置，通过活动ID区分配置，一般该参数使用请求传入的actid参数 |
| openid | string | openid | 请求本次活动的用户的openid,一般该参数使用请求传入的openid参数 |
| callback | function | 回调函数 | 处理结果的回调，输入参数有两个参数，code和cas。 |

- 输出参数

| 参数名 | 类型 | 名称 | 备注 |
| - | - | - | - | 
| code | number | 错误码 | 0为成功，其他都是失败 |
| cas | number | 加锁时间戳 | 用于解锁的时候使用 |


- 接口名称

unlockUsr

- 接口功能

给当前用户解锁，在写操作结束后调用。

- 输入参数

| 参数名 | 类型 | 名称 | 备注 |
| - | - | - | - | 
| actid | number | 活动ID | 不同的活动有不同的配置，通过活动ID区分配置，一般该参数使用请求传入的actid参数 |
| openid | string | openid | 请求本次活动的用户的openid,一般该参数使用请求传入的openid参数 |
| cas | number | 加锁时间戳 | 加锁成功后返回 |
| callback | function | 回调函数 | 处理结果的回调，输入参数有一个参数，code |

- 输出参数

| 参数名 | 类型 | 名称 | 备注 |
| - | - | - | - | 
| code | number | 错误码 | 0为成功，其他都是失败 |

