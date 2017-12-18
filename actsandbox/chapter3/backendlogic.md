# 后台逻辑接口

### 后台逻辑的定位

游戏开发者通过实现后台逻辑文件，接收活动页面发起的用户请求，通过global对象内建接口查询请求用户相关的游戏数据和活动数据，并返回处理结果。

后台逻辑脚本只负责本地逻辑，不能主动发起网络请求，获取数据只能通过内建接口。

### 后台逻辑文件

活动后台逻辑全部编写到一个名为logic.js的文件中，活动平台的后台会加载该文件，并将对应游戏下活动的请求转发到该文件定义的onmessage函数中。

onmessage函数的一般形式如下，注意与模拟器不同，这里不需要exports关键字，相当于把该函数挂到global对象下：

    onmessage = function(message) {
    
    	// message是一个JSON对象的字符串，转换回JSON对象便于处理
    	let req = JSON.parse(message);
		
		// 下面的处理逻辑
		.....

		// 返回信息给客户端浏览器
        postMessage(JSON.stringify({
		    flowid : req.flowid,
            data : data
		}));

    }

在运行时，活动平台会将页面SDK的请求参数转换成JSON格式字符串，放到message参数中，传入给onmessage函数，在处理完成后，通过定义在global对象下的postMessage函数返回信息给客户端浏览器。

### 后台逻辑接口的输入参数

message参数是一个JSON对象的字符串，其JSON格式定义样例如下：

    {
    	"flowid" : 1,
    	"openid" : "123456789012345678901234567890AB",
    	"gameid" : 2003,
    	"cmd" : "getActInfo",
    	"actid" : 1
    }

以下参数为必选参数，每个请求都存在：

| 参数名称    | 说明           | 备注  |
| ------------- |:-------------:| -----:|
| flowid        | 请求ID         | 代表了一个回话，在回包时使用 |
| openid        | 用户OPENID     | 代表用户身份 |
| gameid        | 游戏ID         | 代表当前活动归属游戏 |
| cmd           | 命令名         | 代表当前请求的命令，与前端SDK命令名对应 |
| actid         | 活动ID         | 代表当前请求来自的活动ID |

### 后台逻辑文件的限制

后台逻辑文件必须遵循如下限制

- 名字必须是logic.js
- 只允许一个文件，不允许引用外部文件
- 大小不超过100KB
- 不支持require()、exports、module
- 不支持use strict
- 除内部定义函数外，只能调用global对象内建接口以及本文档提供的接口

