# 用户活动数据接口


### 接口列表

| 接口名称 | 接口说明 | 接口功能 | 关键输入参数 |
| - | - | - | - | 
| setActUsrdata | 设置活动用户数据接口 | 设置活动用户数据 | actid,openid,data,cas |
| getActUsrdata | 查询活动用户数据接口 | 查询活动用户数据 | actid,openid |


### 设置活动用户数据

- 接口名称

setActUsrdata

- 接口功能

设置用户的活动数据

- 输入参数

| 参数名 | 类型 | 名称 | 备注 |
| - | - | - | - | 
| actid | number | 活动ID | 不同的活动有不同的配置，通过活动ID区分配置，一般该参数使用请求传入的actid参数 |
| openid | string | openid | 请求本次活动的用户的openid,一般该参数使用请求传入的openid参数 |
| data | object | 用户活动数据 | 用户参与本次活动的记录数据，这个数据结构可以自定义 |
| cas | number | 数据时间戳标识 | 防止数据修改冲突的标识，如果为-1则强制刷新，从查询用户活动数据接口中获得 |
| callback | function | 回调函数 | 处理结果的回调，输入参数只有一个code，为0则成功，其他则失败 |

- 输出参数

| 参数名 | 类型 | 名称 | 备注 |
| - | - | - | - | 
| code | number | 错误码 |0为成功，其他都是失败 |


### 查询活动用户数据

- 接口名称

getActUsrdata

- 接口功能

查询用户的活动数据

- 输入参数

| 参数名 | 类型 | 名称 | 备注 |
| - | - | - | - | 
| actid | number | 活动ID | 不同的活动有不同的配置，通过活动ID区分配置，一般该参数使用请求传入的actid参数 |
| openid | string | openid | 请求本次活动的用户的openid,一般该参数使用请求传入的openid参数 |
| callback | function | 回调函数 | 处理结果的回调，输入参数有两个参数，code和actUsrData |

- 输出参数

| 参数名 | 类型 | 名称 | 备注 |
| - | - | - | - | 
| code | number | 错误码 |0为成功，其他都是失败 |
| actUsrData | object | 用户活动数据 | 用户参与本次活动的记录数据 |
| actUsrData.cas | number | 数据时间戳标识 | 防止数据修改冲突的标识，在修改活动用户数据时回传 |

- 调用样例

		// 调用查询接口

		getActUsrdata(actid, openid, function(code, actUsrData) {
			if (code != 0) {
				callback({code : 1004, message : 'get act user actUsrData fail, code ' + code});
				return;
			}

			// 中间处理逻辑
			....... 

			// 扣积分，发道具
			let orgRecord = '';
			let newRecord = {};

			// 备份数据，用于回滚
			orgRecord = JSON.stringify(actUsrData);

			newRecord = actUsrData;

			// 生成记录
			let record = {
				pkgid : pkginfo.pkgid,
				ts : Math.floor(new Date() / 1000),
				gifts : pkginfo.gifts
			}

			// 检查记录节点是否存在，不存在或不正确就修改
			if (!newRecord.rcdlst || !newRecord.rcdlst instanceof Array) {
				newRecord.rcdlst = [];
			}

			// 插入新节点
			newRecord.rcdlst.push(record);

			setActUsrdata(actid, openid, newRecord, actUsrData.cas, function(code) {
				if (code != 0) {
					callback({code : 1008, message : 'Set act user data fail, code ' + code});
					return;
				}
               
                // 设置数据成功后的处理分支
                ............... 
           }

		｝