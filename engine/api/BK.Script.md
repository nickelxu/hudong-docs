# 2.1 BK.Script
> 脚本工具类

### 方法 
#### log(level, errcode, info)

> 打印log

 参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
level | number | log级别 | 0为debug级别 发布版本不输出 1为关键级别，发布版本输出 
errcode | number| 错误代码  | 开发者自定义
info| string | 描述  | 开发者自定义
返回值：无

例子：

	BK.Script.log(0,0,"This is a log");



#### loadlib(scriptPath)

 > 执行其他js脚本文件
 
 参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
scriptPath | string | 脚本路径 | 必须以 GameRes://为前缀，不可绝对路径	
返回值：无

例子：

	BK.Script.loadlib('GameRes://script/demo/tinyfly/terrain.js')
	
	

#### pathForResource(path,format)
 > 获取文件路径 
 
 参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
path | string |  文件名 | 
format | string | 后缀名 | 

	
返回值：无


例子：

	BK.Script.pathForResource("test","js");
	

### 例子
查看 script/demo/basics/script_demo.js