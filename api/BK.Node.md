# 2.5 BK.Node

> 节点类

### 成员变量
变量  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
id | number | 标识 | 无
name | string | 名称 | 无
position | Object | 位置 | 无
scale | Object | 比例 | 无
rotation | Object | 旋转 | 结构为 {x:0,y:0,z:0} 绕x,y,z轴逆时针旋转
vertexColor | Object | 顶点颜色 | 格式为 {r:1,g:1,b:1,a:1}。分别代表当前节点渲染顶点的红、绿、蓝、透明值。可以用此改变渲染颜色或透明值
transform | Object | 矩阵变换 | 无
parent | BK.Node | 父亲节点 | 只读属性。默认为undefined。若需重新修改父节点，应从旧节点中移除，再加入到新父节点中
children | Array | 子节点 | 只读属性。无子节点时默认为undefined。若需插入、删除节点，不可直接修改此属性
zOrder | number | z轴排序 | 越小越前
renderUpdate | function | 渲染回调 | 每次进行渲染时会回调
canUserInteract | boolean | 是否可以用户交互 | 默认为false
hidden | boolean | 是否隐藏 | 
body | Object | 物理引擎中刚体 | 详情参考 BK.Physics.Body


###方法

#### 构造函数 new BK.Node()

参数：无

返回值：

 类型 |名称 | 备注
------------- | ------------- | -------------
 Object | 节点对象 |
例子：

	var node = new BK.Node();

#### attachBody(body,offsetX,offsetY)

> 附着一个物理引擎中的刚体对象至当前节点


 参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
body | Object | 物理引擎中刚体对象 |  
offsetX | number | 刚体相对于节点坐标系原点的x偏移 |  
offsetY | number | 刚体相对于节点坐标系原点的y偏移 |  

返回值：无

例子：
	
	var node = new BK.Node();
	var body = new BK.Physics.Body(2,0,0,{"x":150,"y":100});
	node.attachBody(body,0,0);

#### dispose()

> 销毁当前对象


返回值：无

例子：
	
	var node = new BK.Node(); 
	node.dispose();


#### addChild(sonNode)

> 添加子节点


 参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
sonNode | Object | 子节点 |  


返回值：无

例子：
	
	var fatherNode = new BK.Node(); 
	var sonNode = new BK.Node(); 
	fatherNode.addChild(sonNode);


#### removeChildById(id,isDispose)

> 根据id移除子节点


 参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
id | number | 子节点标识id |  
isDispose | boolean | 是否销毁当前节点 |  


返回值：

类型 |名称 | 备注
 ------------- | -------------| -------------
 boolean | 是否删除成功 |  

例子：
	
	var fatherNode = new BK.Node(); 
	var sonNode = new BK.Node(); 
	sonNode.id = 123;
	//移除节点的同时销毁节点
	var removeSucc = fatherNode.removeChildById(123,true);

#### removeChildByName(name,isDispose)

> 根据name移除子节点


 参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
name | string | 子节点名 |  
isDispose | boolean | 是否销毁当前节点 |  


返回值：


类型 |名称 | 备注
 ------------- | -------------| -------------
 boolean | 是否删除成功 |

例子：
	
	var fatherNode = new BK.Node(); 
	var sonNode = new BK.Node(); 
	sonNode.name= "nodeName";
	//移除节点的同时销毁节点
	var removeSucc = fatherNode.removeChildByName("nodeName",true);

#### removeFromParent()

> 移除当前节点


 参数 ：无

返回值：无

例子：
	
	var fatherNode = new BK.Node(); 
	var sonNode = new BK.Node(); 
	//移除节点的同时销毁节点
	var removeSucc = sonNode.removeFromParent();



#### hittest(postion)

> 判断是被点击


 参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
position | Object | 待判断的位置| 结构形如 {x:0,y:0} ，位置基于世界坐标系


返回值：

 类型 |名称 | 备注
------------- | ------------- | -------------
 boolean | 是否被点击 | true为被点击，false为未点击

例子：
	
	var node = new BK.Node(); 
	var clicked = node.hittest({x:1,y:1});
	if(clicked == true){
		//node was clicked
	}
	
	

#### convertToNodeSpace(worldPostion)

> 将一个基于世界坐标点转成基于本地坐标系的坐标点

 参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
position | Object | 基于世界坐标点 | 结构形如 {x:0,y:0}  

例子：
	
	var node = new BK.Node(); 
	node.position = {x:100,y:100};
	BK.Director.root.addChild(node);
	
	//pos 为 0,0
	var pos = node.convertToNodeSpace({x:100,y:100});



#### convertToWorldSpace(nodePostion)

> 将一个基于本地坐标系的坐标点转成基于世界坐标点

 参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
position | Object | 基于世界坐标点 | 结构形如 {x:0,y:0}  

例子：
	
	var node = new BK.Node(); 
	node.position = {x:100,y:100};
	BK.Director.root.addChild(node);
	
	//pos 为 200,200
	var pos = node.convertToWorldSpace({x:100,y:100});

### 例子
查看 script/demo/render/node_demo.js 