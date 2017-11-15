# 2.12 BK.Physics 物理引擎
Bricks使用的物理引擎基于

### BK.Physics.Space
>物理空间

#### 构造函数 new BK.Physics.Space(gravity, iterations)

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
gravity | object |重力|  
iterations | number |迭代次数 |  默认10，该值会影响计算精度
返回值：无

 类型 |名称 | 备注
------------- | ------------- | -------------
 Object |space对象 |
例子：

	var space = new BK.Physics.Space({"x":0,"y":-100},10)
	BK.Director.attachSpace(space)
 

### BK.Physics.Body

#### 构造函数 new BK.Physics.Body(bodytype,mass,moment,position);

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
bodytype |number | 刚体类型 |   0动态刚体 1运动学刚体 2 静态刚体
mass | number |质量 | 
moment | number |转动惯量 | 
position | number |位置| 

返回值：无

 类型 |名称 | 备注
------------- | ------------- | -------------
 Object |刚体对象 |
例子：

	//创建刚体，并且绑定到space中
  	var bodytype = 0 // 0动态刚体 1运动学刚体 2 静态刚体
    var mass  = 100
    var moment = 125000
    var body = new BK.Physics.Body(bodytype,mass,moment,{x:100,y:100});
    space.addBody(body)
 

--

###  BK.Physics.CircleShape
>圆形shape

#### 构造函数 new  BK.Physics.CircleShape(body,raduis,offsideX,offsideY);

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
body |Object | 绑定的刚体 |  
raduis | number | 半径 | 
offsideX | number | shape | 
offsideY | number |位置| 

返回值：无

 类型 |名称 | 备注
------------- | ------------- | -------------
 Object |刚体对象 |
例子：

	//创建刚体，并且绑定到space中
    var cicleShape =new BK.Physics.CircleShape(body,10,0,0);
    space.addShape(cicleShape);



### 成员变量
变量  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
collisionType | number | 碰撞类型| 无

--



###  BK.Physics.PolygonShape
>多边形shape

#### 构造函数 new  BK.Physics.PolygonShape(body, polyPts, transForm, isSmooth);

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
body |Object | 绑定的刚体 |  
polyPts | Array | 定义多边形点数组 | 
transForm | Object | 对于多边形的变换矩阵 | 
radius | number |多边形宽度| 


其中：transfrom 为 3*3 列矩阵，形如

	 a b tx
	 c d ty
	 0 0 1


返回值：无

 类型 |名称 | 备注
------------- | ------------- | -------------
 Object |刚体对象 |
例子：

	var polyPts = [
    {"x":0 ,"y":0},
    {"x":50,"y":0},
    {"x":50,"y":50},
    {"x":0 ,"y":50}
	]
	var transForm = {"a": 1, "b":0, "c":0, "d":1, "tx":0, "ty":0};
		
	var polyShape = new BK.Physics.PolygonShape(boxBody,polyPts,transForm,1);
	space.addShape(polyShape);


--
###  碰撞检测
###  BK.Physics.addCollisionHandler(space,collisionType1,collisionType2,data,beginCB,preSolveCB,postSolveCB,separateCB)

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
space | Object | space对象|  
collisionType1 | number | 碰撞对象1|  
collisionType2 | number | 碰撞对象2|  
data | Object | 自定义的对象|  
beginCB | function | 开始碰撞时的回调|  
preSolveCB | function |预处理回调|  
postSolveCB | function | 重合回调|  
separateCB | function | 分离回调|  
返回值：无

例子：

	BK.Physics.addCollisionHandler(space,111,boxBody3.collisionType,null,
	    function(arbiter){  //begin
	        var nor = arbiter.normal;//碰撞接触点的法线向量
	        var norX = nor.x;
	        var norY = nor.y;
	        return true; //true代表接受碰撞，false代表忽略碰撞，seprate函数依然会调用
	    },
	    //每一帧下回调 pre + post 
	    function(arbiter){//pre   
	         // 返回false时，post不会调用，separate会调用
	        return true;
	    },
	    function(arbiter){ //post   物理相交时调用
	    },
	    function(arbiter){ //separate 物理分开时调用
	    }
	);

### 例子
查看 script/demo/physics/physics_demo.js 