# 活动配置查询

### 接口列表

| 接口名称 | 接口说明 | 接口功能 | 关键输入参数 |
| - | - | - | - | 
| getActConf | 查询活动信息接口 | 查询活动的配置信息和状态 | actid,openid |


### 查询活动信息接口

- 接口名称

getActConf

- 接口功能

查询活动配置文件内容，活动配置文件为通过活动管理平台上传的config.json文件。

- 输入参数

| 参数名 | 类型 | 名称 | 备注 |
| - | - | - | - | 
| actid | number | 活动ID | 不同的活动有不同的配置，通过活动ID区分配置，一般该参数使用请求传入的actid参数 |
| openid | string | openid | 请求本次活动的用户的openid,一般该参数使用请求传入的openid参数 |
| callback | function | 结果回调 | 请求结果的回调函数，该函数有两个输入参数，code为错误码，actConf为配置 |

- 输出参数

| 参数名 | 类型 | 名称 | 备注 |
| - | - | - | - | 
| code | number | 错误码 | 查询活动配置的返回错误码，0为成功，其他都是失败 |
| actConf | object | 活动配置 | 查询成功时，返回config.json文件对应的配置内容 |

注：config.json文件的内容目前支持完全自定义。但建议按 [活动配置文件](chapter3/backendcfg.md) 章节的语法配置，后续会限制为页面配置方式生成。

- 调用样例


		callBackList.getActInfo = function(req, callback) {

	    	// 活动ID
	    	let actid = req.actid;
	    
	    	// OPENID
	    	let openid = req.openid;
	    
	    	// 判断活动当前状态是否过期
	    	let now = Math.floor(new Date() / 1000);
	    
	    	// 查询活动配置数据的接口
	    	getActConf(actid, openid, function(code, actConf) {
	    		if (code != 0) {
	    			callback({code : 1001, message : 'act is not exist.'});
	    			return;
	    		}
	    
	    		if (now < actConf.begTs) {
	    			callback({code : 1002, message : 'act is not begin.'});
	    		}
	    		else if (now > actConf.endTs) {
	    			callback({code : 1003, message : 'act has end.'});
	    		}
	    		else {
	    			callback({
	    				code : 0,
	    				message : 'success',
	    				data : {
	    					actconf : actConf,
	    				}
	    			});
	    		}
	    	});
    	};