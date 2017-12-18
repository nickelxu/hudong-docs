# 用户道具接口

### 接口列表

| 接口名称 | 接口说明 | 接口功能 | 关键输入参数 |
| - | - | - | - | 
| isBuyItemToday | 查询用户当天是否买道具 | 查询用户当天是否买道具 | actid,openid |
| sendGameItem | 赠送用户道具 | 设置活动用户数据 | actid,openid,gift |

### 获取用户道具信息

- 接口名称

isBuyItemToday

- 接口功能

查询用户当天是否买道具

- 输入参数

| 参数名 | 类型 | 名称 | 备注 |
| - | - | - | - | 
| actid | number | 活动ID | 不同的活动有不同的配置，通过活动ID区分配置，一般该参数使用请求传入的actid参数 |
| openid | string | openid | 请求本次活动的用户的openid,一般该参数使用请求传入的openid参数 |
| callback | function | 回调函数 | 处理结果的回调，输入参数有两个，code和isBuy |

- 输出参数

| 参数名 | 类型 | 名称 | 备注 |
| - | - | - | - | 
| code | number | 错误码 |0为成功，其他都是失败 |
| isBuy | bool | 是否购买了道具 | true,买了；false，没买 |


### 赠送用户道具

- 接口名称

sendGameItem

- 接口功能

查询用户的活动数据

- 输入参数

| 参数名 | 类型 | 名称 | 备注 |
| - | - | - | - | 
| actid | number | 活动ID | 不同的活动有不同的配置，通过活动ID区分配置，一般该参数使用请求传入的actid参数 |
| openid | string | openid | 请求本次活动的用户的openid,一般该参数使用请求传入的openid参数 |
| gift | object | 奖品信息 | 规范化的奖品信息 |
| giftid | number | 奖品ID | 如果发放的是道具，这里填写道具ID |
| num | number | 奖品数量 | 如果发放的是道具，这里填写道具发放数量 |
| callback | function | 回调函数 | 处理结果的回调，输入参数有两个参数，code和actUsrData |

gift参数的格式:

    {
        "giftid": 2, 
        "num": 1
    }

- 输出参数

| 参数名 | 类型 | 名称 | 备注 |
| - | - | - | - | 
| code | number | 错误码 |0为成功，其他都是失败 |

