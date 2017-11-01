# 2.18 BK.Buffer 缓冲区


### BK.Buffer
> 缓冲器 

### 方法
#### 构造函数 new BK.Buffer(length,netOrder)

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
length | string | buffer长度 |  
netOrder | string | 是否为网络字节序 |  为1代表网络字节序，其他为主机字节序（选填）
返回值：

 类型 |名称 | 备注
------------- | ------------- | -------------
 Object | BK.Buffer对象 |
例子：

	var buff = new BK.Buffer(84,1);
	
	
#### readStringBuffer()
>读取string字符串
参数：无
返回值：

 类型 |名称 | 备注
------------- | ------------- | -------------
 string | 字符串 |
例子：

	var buff = BK.FileUtil.readFile("test");
	var string = buff.readStringBuffer();

#### readAsString()
>将buffer整段以字符串格式进行读取
参数：无

返回值：

 类型 |名称 | 备注
------------- | ------------- | -------------
 string | 字符串 |
例子：

```
	//如读取从文件中读取一段数据，并以string的方式输出
	var buff = BK.FileUtil.readFile("GameRes://action/jump/action.json");
	var string = buff.readAsString();
	BK.Script.log(1,1,"readFile content="+string);
```

### readUint8Buffer()
>以无符号8位整型格式 读取当前buffer

参数：无
返回值：

 类型 |名称 | 备注
------------- | ------------- | -------------
 number | 当前buffer最前无符号8位数字 |
例子：

	var buff = BK.FileUtil.readFile("test");
	var string = buff.readUint8Buffer();
	
### readUint16Buffer()
>以无符号16位整型格式 读取当前buffer

参数：无
返回值：

 类型 |名称 | 备注
------------- | ------------- | -------------
 number | 当前buffer最前无符号16位数字 |
例子：

	var buff = BK.FileUtil.readFile("test");
	var string = buff. readUint16Buffer();
	
	
### readUint32Buffer()
>以无符号32位整型格式 读取当前buffer

参数：无

返回值：

 类型 |名称 | 备注
------------- | ------------- | -------------
 number | 当前buffer最前无符号32位数字 |
例子：

	var buff = BK.FileUtil.readFile("test");
	var string = buff.readUint32Buffer();
	
	
### readUint64Buffer()
>以无符号64位整型格式 读取当前buffer

参数：无

返回值：

 类型 |名称 | 备注
------------- | ------------- | -------------
 number | 当前buffer最前无符号64位数字 |
例子：

	var buff = BK.FileUtil.readFile("test");
	var string = buff.readUint64Buffer();
	
		
### readInt8Buffer()
>以8位整型格式 读取当前buffer

参数：无

返回值：

 类型 |名称 | 备注
------------- | ------------- | -------------
 number | 当前buffer最前8位数字 |
例子：

	var buff = BK.FileUtil.readFile("test");
	var string = buff.readInt8Buffer();
	
### readInt16Buffer()
>以16位整型格式 读取当前buffer

参数：无

返回值：

 类型 |名称 | 备注
------------- | ------------- | -------------
 number | 当前buffer最前16位数字 |
例子：

	var buff = BK.FileUtil.readFile("test");
	var string = buff.readInt16Buffer();
	
### readInt32Buffer()
>以32位整型格式 读取当前buffer

参数：无

返回值：

 类型 |名称 | 备注
------------- | ------------- | -------------
 number | 当前buffer最前32位数字 |
例子：

	var buff = BK.FileUtil.readFile("test");
	var string = buff.readInt32Buffer();
		
### readInt64Buffer()
>以64位整型格式 读取当前buffer

参数：无

返回值：

 类型 |名称 | 备注
------------- | ------------- | -------------
 number | 当前buffer最前64位数字 |
例子：

	var buff = BK.FileUtil.readFile("test");
	var string = buff. readInt64Buffer();
		
### readFloatBuffer()
>以单精度浮点数格式 读取当前buffer

参数：无

返回值：

 类型 |名称 | 备注
------------- | ------------- | -------------
 number | 当前buffer单精度浮点数字 |
例子：

	var buff = BK.FileUtil.readFile("test");
	var string = buff.readFloatBuffer();
	
### readDoubleBuffer()
>以双精度浮点数格式 读取当前buffer

参数：无

返回值：

 类型 |名称 | 备注
------------- | ------------- | -------------
 number | 当前buffer双精度浮点数字 |
例子：

	var buff = BK.FileUtil.readFile("test");
	var string = buff.readDoubleBuffer();
	
### readBuffer(length)
>读取一定长度的buffer

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
length | string | 待取的buffer长度 |  

返回值：

 类型 |名称 | 备注
------------- | ------------- | -------------
 BK.Buffer | 截取的buffer对象 | 
例子：

	//读取8字节长度buffer
	var buff = BK.FileUtil.readFile("test");
	var string = buff.readBuffer(8);
	
	
	
### writeBuffer(buffer)
>从其他buffer写入到当前buffer

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
buffer | BK.Buffer |其他buffer|  

返回值：无

例子：

	var buff2 = BK.FileUtil.readFile("test");
	var buff = new BK.Buffer(10);
	buff.writeBuffer(buffer2)
	
	
### writeAsString(str)
>从整段string写入到buffer

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
str | string | 字符|  

返回值：无

例子：

```
var str = "123";
var buffAllStr = new BK.Buffer(str.length);
buffAllStr.writeAsString(str);

```
	
### writeUint8Buffer(num)
>写入无符号8位数字到当前buffer

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
num | number |数字|  

返回值：无

例子：

	var buff = new BK.Buffer(10);
	buff.writeUint8Buffer(1)

### writeUint16Buffer(num)
>写入无符号16位数字到当前buffer

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
num | number |数字|  

返回值：无

例子：

	var buff = new BK.Buffer(10);
	buff. writeUint16Buffer(1)
											

### writeUint32Buffer(num)
>写入无符号32位数字到当前buffer

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
num | number |数字|  

返回值：无

例子：

	var buff = new BK.Buffer(10);
	buff.writeUint32Buffer(1)
												
### writeUint64Buffer(num)
>写入无符号64位数字到当前buffer

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
num | number |数字|  

返回值：无

例子：

	var buff = new BK.Buffer(10);
	buff.writeUint64Buffer(1)
											
### writeInt8Buffer(num)
>写入8位数字到当前buffer

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
num | number |数字|  

返回值：无

例子：

	var buff = new BK.Buffer(10);
	buff. writeInt8Buffer(1)
											
### writeInt16Buffer(num)
>写入16位整型数字到当前buffer

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
num | number |数字|  

返回值：无

例子：

	var buff = new BK.Buffer(10);
	buff.writeInt16Buffer(1)
											
### writeInt32Buffer(num)
>写入32位整型数字到当前buffer

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
num | number |数字|  

返回值：无

例子：

	var buff = new BK.Buffer(10);
	buff.writeInt32Buffer(1)
	
### writeInt64Buffer(num)
>写入64位整型数字到当前buffer

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
num | number |数字|  

返回值：无

例子：

	var buff = new BK.Buffer(10);
	buff.writeInt64Buffer(1)
	
### writeFloatBuffer(num)
>写入单精度浮点数字到当前buffer

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
num | number |数字|  

返回值：无

例子：

	var buff = new BK.Buffer(10);
	buff. writeFloatBuffer(1.1)
	
### writeDoubleBuffer(num)
>写入双精度浮点数字到当前buffer

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
num | number |数字|  

返回值：无

例子：

	var buff = new BK.Buffer(10);
	buff.writeDoubleBuffer(1.1)
	
### writeDoubleBuffer(num)
>写入双精度浮点数字到当前buffer

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
num | number |数字|  

返回值：无

例子：

	var buff = new BK.Buffer(10);
	buff.writeDoubleBuffer(1.1)
	
### writeStringBuffer(str)
>写入字符串到当前buffer

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
str | string |待写入的字符串|  

返回值：无

例子：

	var str = "0123456789"
	var buff = new BK.Buffer(10);
	buff.writeStringBuffer(str)

### releaseBuffer()
>释放内存

参数：无
返回值：无

例子：

	var buff = new BK.Buffer(10);
	buff.releaseBuffer()


### bufferLength()
>获取buffer长度

参数：无
返回值：无

例子：

	var buff = new BK.Buffer(10);
	var len = buff.bufferLength()	;


### 例子
查看 Res/script/demo/basics/buffer_demo.js