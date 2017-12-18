# 用户上报数据查询

### 接口列表

| 接口名称 | 接口说明 | 接口功能 | 关键输入参数 |
| - | - | - | - | 
| getRecord | 查询游戏上报数据接口 | 查询游戏数据上报接口 | actid,openid |


### 查询游戏上报数据接口

- 接口名称

getRecord

- 接口功能

查询游戏上报数据接口，用于查询获得。

- 输入参数

| 参数名 | 类型 | 名称 | 备注 |
| - | - | - | - | 
| actid | number | 活动ID | 不同的活动有不同的配置，通过活动ID区分配置，一般该参数使用请求传入的actid参数 |
| openid | string | openid | 请求本次活动的用户的openid,一般该参数使用请求传入的openid参数 |
| callback | function | 结果回调 | 请求结果的回调函数，该函数有两个输入参数，code为错误码，gameRcdlist为用户上报记录 |

- 输出参数

| 参数名 | 类型 | 名称 | 备注 |
| - | - | - | - | 
| code | number | 错误码 | 0为成功，其他都是失败 |
| gameRcdlist | object | 上报数据记录 | 查询成功时，返回用户上报的游戏数据记录 |
| list | Array | 上报数据记录数组 | |
| ts | number | 上报记录的时间戳 | |
| scoreInfo | object | 上报的积分字段 | |
| actParam | object | 上报的自定义参数字段 | |

gameRcdlist对象的参考结构如下:

	{
	    "list" : [
	        {
	            "ts" : 1505705673,
	            "scoreInfo" : {
	                "score" : 1000,
	                "a1" : 1,
	                "a2" : 2,
	                "a3" : 3,
	                "a4" : 4,
	                "a5" : 5
	            },
	            "actParam" : {
	                "p1" : 1,
	                "p2" : 1,
	                "p3" : 1,
	                "p4" : 1,
	                "p5" : 1,
	                "p6" : 1,
	                "p7" : 1,
	                "p8" : 1,
	                "p9" : 1,
	                "p10" : 1,
	                "p11" : 1,
	                "p12" : 1,
	                "p13" : 1,
	                "p14" : 1,
	                "p15" : 1,
	                "p16" : 1
	            }
	        }
	    ]
	}


- 调用样例

		// 处理逻辑的封装函数
		let condCheckCustom = function(actid, openid, cond, customCb) {

			getRecord(actid, openid, function(code, gameRcdlist) {
				if (code != 0) {
					customCb(code, null);
					return;
				}
		
				// 获取当天开始时间
				let todayBegin = getTodaybeginTs();
		
				// 遍历用户的字段，找出当天达到五杀的记录
				let sumP1 = 0;
		
				if (!gameRcdlist.list || !gameRcdlist.list instanceof Array) {
					customCb(-2, null);
					return;
				}
		
				for (let rcd of gameRcdlist.list) {
					if (rcd.ts <= todayBegin) {
						continue;
					}
		
					sumP1 += rcd.actParam.p1;
				}
		
				// 判断当天的P1之和是否大于设置值
				if (sumP1 >= cond.stand) {
					customCb(0, {condid : cond.condid, stand : cond.stand, value : sumP1, status : 1});	
				}
				else {
					customCb(0, {condid : cond.condid, stand : cond.stand, value : sumP1, status : 0});	
				}
			});
		}