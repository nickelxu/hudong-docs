# 2.16 BK.FileUtil 音频

>文件工具类

### 方法
#### readFile(filePath)
> 读取文件

参数 ：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
filePath | string | 文件路径 |  

返回值：

 类型 |名称 | 备注
------------- | ------------- | -------------
 Object | BK.Buffer对象 | 
例子：
	
	//读取沙盒文件路径下的 名为test的文件
	var buff = BK.FileUtil.readFile("GameSandBox://test");
	
#### writeFile(path,content)
> 读取文件

参数 ：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
path | string | 文件路径 |  
content | string | 内容 |  

返回值：无

例子：
	
	//写入一段文字 到 沙盒文件路径下的 名为test的文件中
	BK.FileUtil.writeFile("GameSandBox://test","this is a content!");
	
#### writeBufferToFile(path,buff)
> 写入BK.Buffer 到指定目录

参数 ：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
path | string | 文件路径 |  
buff | Object |  BK.Buffer对象 |  
返回值：无

例子：
	
	//从test文件读取到文件内容后，写入到demo/tst/demo/test3 路径下
    var buff = BK.FileUtil.readFile(GameSandBox://test);
    BK.FileUtil.writeBufferToFile("GameSandBox://demo/tst/demo/test3",buff);

#### isFileExist(filePath)
> 读取文件

参数 ：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
filePath | string | 文件路径 |  

返回值：

 类型 |名称 | 备注
------------- | ------------- | -------------
 bool | 是否存在 | 


#### deleteFile(filePath)
> 删除文件

参数 ：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
filePath | string | 文件路径 |  

返回值：

类型 |名称 | 备注
------------- | ------------- | -------------
 bool | 是否删除成功 | 


#### makeDir(filePath)
> 生成文件夹

参数 ：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
filePath | string | 文件夹路径 |  

返回值：

类型 |名称 | 备注
------------- | ------------- | -------------
 bool | 是否创建成功 | 


### 例子
查看 script/demo/file/file_demo.js