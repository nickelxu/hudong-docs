# 2.3 BK.Ticker

> 定时器

###成员变量
变量  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
interval | number | 每调用60次所需的秒时 | 例如：1代表 1秒调用60次。2代表2秒内调用60 。即1代表60帧/秒 2代表 30帧/秒
paused | boolean | 暂停 | true代表暂停，false代表运行


### 方法
####  dispose()

> 销毁当前对象


返回值：无

例子：
	
	var t = new BK.Ticker(); 
	t.dispose();

#### setTickerCallBack( func )

> 设置定时回调函数
> 

参数

名字  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
func | function | 设置的回调函数 | 函数第一个参数ts代表，当前时间戳，单位为毫秒，第二个参数为帧间隔，单位为秒


返回值：无

例子：
	
	var t = new BK.Ticker(); 
	t.interval = 1;
	t. setTickerCallBack(function(ts,duration)
	{
		//定时回调
	});
	
	
# 2.3 BK.Director.ticker
>程序主ticker
>
>该ticker为程序主定时器，为开发方便，特地添加了几种方法方便开发者进行调用。下列4个方法仅BK.Director.ticker独有，非BK.Ticker通用函数
>
>

### 方法
####  add(callback,obj)
>添加一个方法回调至主循环中

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
callback | function | 回调函数 |
obj | obj | 回调函数的绑定对象 | 可选参数

返回值：无

例子：

```

//1.不绑定obj
BK.Director.ticker.add(function(ts,duration){
	//do something
});

//2.将回调函数绑定至obj对象中，方便后续解除绑定
var obj = {}
BK.Director.ticker.add(function(ts,duration){
	//do something
},obj);


```

####  remove(obj)

> 根据obj移除对应的回调函数
> 
> 
> 与add函数对应，当无需调用时，可根据add时传入的obj来移除回调


返回值：无

例子：
	
```
	var obj = {}
	BK.Director.ticker.add(function(ts,duration){
		//do something
	},obj);
	BK.Director.ticker.remove(obj);
```


#### setTimeout(func,millsecond,obj)
> 延迟回调函数
> 
> 在延迟millsecond时间后，调用func函数

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
func | function | 回调函数 |
millsecond | number | 延迟时间 | 
obj | object | 绑定对象 | 可选参数

返回值：无

例子：
	
```
	//延迟3秒后调用函数
	
	//1.不绑定对象
	BK.Director.ticker.setTimeout(function () {
    BK.Script.log(0,0,"Timeout call!2 curr = "+BK.Time.timestamp);
},3000);
	
	//2.绑定对象
	var obj = {}
BK.Director.ticker.setTimeout(function () {
    BK.Script.log(0,0,"Timeout call! curr = "+BK.Time.timestamp);
},3000,obj);
	
```



#### removeTimeout(obj)
> 移除延迟回调函数
> 
> 与setTimeout对应，移除obj绑定的延迟回调函数

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
obj | object | 绑定对象 | 可选参数

返回值：无

例子：
	
```
var obj = {}

BK.Director.ticker.setTimeout(function () {
    BK.Script.log(0,0,"Timeout call! curr = "+BK.Time.timestamp);
},3000,obj);

BK.Director.ticker.removeTimeout(obj);
	
```

##注意事项
#### 防止离开作用域后实例被js引擎销毁
当BK.Ticker实例在一个作用域生成后，当程序的执行离开所在的作用域后，ticker实例会被js引擎回收。因此当使用ticker作为定时器时，需确保实例的生命周期是符合设计的

例如下面的例子，当ticker对象离开loadTicker函数作用域后，ticker对象会被js引擎回收，定时器不会继续执行。

```
function loadTicker() {
  var ticker = new BK.Ticker();
  ticker.interval = 2;
  ticker.setTickerCallBack(function(ts,duration)
  {
     BK.Script.log(0,0,"update");
  })
}
loadTicker();

```


### 例子
查看 script/demo/basics/ticker_demo.js 