# 辅助操作接口

### 接口列表

| 接口名称 | 接口说明 | 接口功能 | 关键输入参数 |
| - | - | - | - | 
| condCheckScore | 检查积分是否满足条件 | 检查积分是否满足条件 | actid,openid,cond |
| condCheckFollow | 检查用户是否关注服务号 | 检查用户是否关注服务号 | actid,openid,cond |
| sendScore | 赠送用户积分 | 赠送用户积分 | actid,openid,gift |

- 接口名称

condCheckScore

- 接口功能

检查用户积分是否满足条件

- 输入参数

| 参数名 | 类型 | 名称 | 备注 |
| - | - | - | - | 
| actid | number | 活动ID | 不同的活动有不同的配置，通过活动ID区分配置，一般该参数使用请求传入的actid参数 |
| openid | string | openid | 请求本次活动的用户的openid,一般该参数使用请求传入的openid参数 |
| cond | object | 积分检查条件 |  |
| scoreid | number | 需要检查的积分ID |  |
| score | number | 积分门限 |  |
| condid | number | 条件ID |  |
| callback | function | 回调函数 | 处理结果的回调，输入参数有两个参数，code和condinfo |

cond的结构如下：

{
	"condid" : 1,
    "socreid" : 1,
    "score" : 10
}

- 输出参数

| 参数名 | 类型 | 名称 | 备注 |
| - | - | - | - | 
| code | number | 错误码 | 0为成功，其他都是失败 |
| condinfo | object | 条件匹配结果 ||
| condid | number | 条件ID | 条件配置的ID |
| stand | number | 条件ID | 条件配置的积分门限 |
| value | number | 用户的积分 ||
| status | number | 0为不满足，1为满足 ||


- 接口名称

condCheckFollow

- 接口功能

检查用户积分是否满足条件

- 输入参数

| 参数名 | 类型 | 名称 | 备注 |
| - | - | - | - | 
| actid | number | 活动ID | 不同的活动有不同的配置，通过活动ID区分配置，一般该参数使用请求传入的actid参数 |
| openid | string | openid | 请求本次活动的用户的openid,一般该参数使用请求传入的openid参数 |
| cond | object | 积分检查条件 |  |
| condid | number | 条件ID |  |
| callback | function | 回调函数 | 处理结果的回调，输入参数有两个参数，code和condinfo |

cond的结构如下：

{
	"condid" : 1
}

- 输出参数

| 参数名 | 类型 | 名称 | 备注 |
| - | - | - | - | 
| code | number | 错误码 | 0为成功，其他都是失败 |
| condinfo | object | 条件匹配结果 ||
| condid | number | 条件ID | 条件配置的ID |
| stand | number | 条件ID | 固定为1 |
| value | number | 用户是否关注，0为未关注，1为关注 ||
| status | number | 0为不满足，1为满足 ||

- 接口名称

sendScore

- 接口功能

发送活动周期内都有效的积分

- 输入参数

| 参数名 | 类型 | 名称 | 备注 |
| - | - | - | - | 
| actid | number | 活动ID | 不同的活动有不同的配置，通过活动ID区分配置，一般该参数使用请求传入的actid参数 |
| openid | string | openid | 请求本次活动的用户的openid,一般该参数使用请求传入的openid参数 |
| gift | object | 奖品信息 | 规范化的奖品信息 |
| giftid | number | 奖品ID | 如果发放的是积分，这里填写积分ID |
| num | number | 奖品数量 | 如果发放的是积分，这里填写积分发放数量 |
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