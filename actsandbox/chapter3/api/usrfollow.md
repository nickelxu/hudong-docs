# 用户关注服务号查询

### 接口列表

| 接口名称 | 接口说明 | 接口功能 | 关键输入参数 |
| - | - | - | - | 
| getFollow | 查询关注关系接口 | 查询用户是否关注绑定公众号接口 | actid,openid |


### 查询游戏上报数据接口

- 接口名称

getFollow

- 接口功能

查询用户关注游戏的服务号状态，一个活动归属一个游戏，游戏归属一个开发者，一个开发者帐号则绑定一个服务号，查询的是该绑定服务号。

- 输入参数

| 参数名 | 类型 | 名称 | 备注 |
| - | - | - | - | 
| actid | number | 活动ID | 不同的活动有不同的配置，通过活动ID区分配置，一般该参数使用请求传入的actid参数 |
| openid | string | openid | 请求本次活动的用户的openid,一般该参数使用请求传入的openid参数 |
| callback | function | 结果回调 | 请求结果的回调函数，该函数有两个输入参数，code为错误码，follow为用户关注与否 |

- 输出参数

| 参数名 | 类型 | 名称 | 备注 |
| - | - | - | - | 
| code | number | 错误码 | 0为成功，其他都是失败 |
| follow | number | 关注标识 | 查询成功时，返回用户关注与否，1为关注，其他都是没关注 |


- 调用样例

		getFollow(actid, openid, function(code, isFollow){

			if (code != 0) {
				callback(0, {condid : cond.condid, stand : 1, value : 0, status : 1});
				return;
			}
	
			if (isFollow) {
				callback(0, {condid : cond.condid, stand : 1, value : isFollow, status : 1});	
			}
			else {
				callback(0, {condid : cond.condid, stand : 1, value : isFollow, status : 0});	
			}
		});