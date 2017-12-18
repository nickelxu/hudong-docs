# 2.9 BK.TouchEvent

>触摸事件类


>每次手指点击时，会产生与手指相同数量的触控对象。如2个手指同时点击，将会产生2个触控对象，其中触控对象保存了当前的手指id，位置，点击态（点击中，移动中，点击抬起）等信息。

>接受触摸的流程。
>1.调用getTouchEvent 获取触摸时间数组
>2.处理触摸事件
>3.调用updateTouchStatus更新触摸


首先先说明触控对象其中的元素

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
id | number | 触控对象标识 |  不同手指有不同id
x | number | x轴位置 |  当前点击的x位置。单位为逻辑点
y | number | y轴位置 |  当前点击的y位置。单位为逻辑点
status | number | 点击态 |  1.点击抬起 2.点击中 3.移动中

### 方法 

#### getTouchEvent()
>获取触摸事件  

参数：无

返回值：

 类型 |名称 | 备注
------------- | ------------- | -------------
 Array | 触摸事件 | 该数组每个元素代表一个手指触摸对象



#### updateTouchStatus()
>更新触摸分发。调用getTouchEvent后必须调用该方法
参数：无

返回值：无



获取点击事件例子：
```javascript
	var touchArr = BK.TouchEvent.getTouchEvent();
	for(var i=0;i<touchArr.length;i++){
	        var x = touchArr[i].x;
	        var y = touchArr[i].y;
	        //点击中
	        if(touchArr[i].status == 2 ){
	        	//do something
	        }
	}
	BK.TouchEvent.updateTouchStatus();
```

## 注意事项：
需确保全局仅有一处地方使用getTouchEvent获取点击事件，同一时间获取多次getTouchEvent会导致触摸事件混乱。