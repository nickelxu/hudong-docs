# 用户游戏积分

### 接口列表

| 接口名称 | 接口说明 | 接口功能 | 关键输入参数 |
| - | - | - | - | 
| addUsrScore | 发放用户积分 | 增加用户的积分 | actid,openid,scoreid,scoretm,num |
| getUsrScore | 查询用户积分 | 查询用户的积分 | actid,openid,scoreid,scoretm |
| decUsrScore | 减少用户积分 | 减少用户的积分 | actid,openid,scoreid,scoretm,num |

### 发放用户积分

- 接口名称

addUsrScore

- 接口功能

发放（增加）用户积分

- 输入参数

| 参数名 | 类型 | 名称 | 备注 |
| - | - | - | - | 
| actid | number | 活动ID | 不同的活动有不同的配置，通过活动ID区分配置，一般该参数使用请求传入的actid参数 |
| openid | string | openid | 请求本次活动的用户的openid,一般该参数使用请求传入的openid参数 |
| scoreid | number | 积分ID | 规范化的奖品信息 |
| scoretm | number | 积分时间戳 | 区分积分有效期 |
| num | number | 积分数量 | 发放积分数量 |
| callback | function | 回调函数 | 处理结果的回调，输入参数为code |

- 输出参数

| 参数名 | 类型 | 名称 | 备注 |
| - | - | - | - | 
| code | number | 错误码 |0为成功，其他都是失败 |

### 查询用户积分

- 接口名称

getUsrScore

- 接口功能

查询用户积分

- 输入参数

| 参数名 | 类型 | 名称 | 备注 |
| - | - | - | - | 
| actid | number | 活动ID | 不同的活动有不同的配置，通过活动ID区分配置，一般该参数使用请求传入的actid参数 |
| openid | string | openid | 请求本次活动的用户的openid,一般该参数使用请求传入的openid参数 |
| scoreid | number | 积分ID | 规范化的奖品信息 |
| scoretm | number | 积分时间戳 | 区分积分有效期 |
| callback | function | 回调函数 | 处理结果的回调，输入参数有两个参数，code和scoreinfo |

- 输出参数

| 参数名 | 类型 | 名称 | 备注 |
| - | - | - | - | 
| code | number | 错误码 |0为成功，其他都是失败 |
| scoreinfo | object | 积分信息 |  |
| scoreId | number | 积分ID |  |
| score | number | 积分数量 |  |

scoreinfo的结构定义如下：

	{
	    "scoreId" : 1,
	    "score" : 10
	}


### 扣减用户积分

- 接口名称

decUsrScore

- 接口功能

发放（增加）用户积分

- 输入参数

| 参数名 | 类型 | 名称 | 备注 |
| - | - | - | - | 
| actid | number | 活动ID | 不同的活动有不同的配置，通过活动ID区分配置，一般该参数使用请求传入的actid参数 |
| openid | string | openid | 请求本次活动的用户的openid,一般该参数使用请求传入的openid参数 |
| scoreid | number | 积分ID | 规范化的奖品信息 |
| scoretm | number | 积分时间戳 | 区分积分有效期 |
| num | number | 积分数量 | 扣减积分数量 |
| callback | function | 回调函数 | 处理结果的回调，输入参数有两个参数，code |

- 输出参数

| 参数名 | 类型 | 名称 | 备注 |
| - | - | - | - | 
| code | number | 错误码 |0为成功，其他都是失败 |