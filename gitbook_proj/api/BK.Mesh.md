# 2.11 BK.Mesh

> 网格
> 通过自定义顶点数组，映射到纹理中的不同位置中，可以做成非常灵活的多边形等

> 父类 BK.Node

### 成员变量
变量  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
id | number | 标识 | 无
###方法
#### 构造函数 new BK.Mesh(tex,vertexes,indices);

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
tex | Object | 纹理对象 |  有BK.Texture中生成的纹理对象
vertexes | Array | 顶点数组 |
indices | Array | 顶点索引 |  
返回值：
网格对象

例子：

	//下方例子为一个正方形图片
	var tex =new BK.Texture('GameRes://texture/terrain.png');
	var vertexes = [
	                {"x":100, "y":100,"z":0,"r":1,"g":1,"b":1,"a":1,"u":1,"v":1},
	                {"x":100, "y":0,"z":0,"r":1,"g":1,"b":1,"a":1,"u":1,"v":0},
	                {"x":0, "y":0,"z":0,"r":1,"g":1,"b":1,"a":1,"u":0,"v":0},
	                {"x":0, "y":0,"z":0,"r":1,"g":1,"b":1,"a":1,"u":0,"v":0},
	                {"x":0, "y":100,"z":0,"r":1,"g":1,"b":1,"a":1,"u":0,"v":1},
	                {"x":100, "y":100,"z":0,"r":1,"g":1,"b":1,"a":1,"u":1,"v":1},
	                
	                ];
	var indices = [0,1,2,3,4,5];
	var  mesh = new BK.Mesh(tex,vertexes,indices);
	
#### setTexture(texture)
>设置纹理

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
texture|Object|纹理对象|由BK.Texture生成的对象

返回值：无

#### addVerticesAndIndices(newVertexes,newIndices)
>新增顶点与索引数组。在现有的顶点数组和索引数组后添加新的索引点

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
newVertexes | Array | 新增顶点数组 |
newIndices | Array | 新增顶点索引 |  

返回值：
无

例子：
	
	var tex =new BK.Texture('GameRes://texture/terrain.png');
	var  vertexes = [
	     {"x":0, "y":0,"z":0,     "r":1,"g":1,"b":1,"a":1, "u":0,"v":0},
	     {"x":320, "y":0,"z":0,   "r":1,"g":1,"b":1,"a":1, "u":0,"v":0},
	     {"x":320, "y":320,"z":0, "r":1,"g":1,"b":1,"a":1, "u":0,"v":0},
	];
	var indices = [0,1,2];
	var  mesh = new BK.Mesh(tex,vertexes,indices);
	BK.Director.root.addChild(mesh);
	
	
	//新增顶点与索引数组
	var  newVertexes = [
	     {"x":0, "y":320,"z":0, "r":1,"g":1,"b":1,"a":1, "u":0,"v":0},
	];
	var newIndices = [0,2,3];
	
	//由三个顶点加到四个顶点，并加上三个索引数组
	//此时有四个顶点(0,0)(320,0),(320,320),(0,320)，6个索引值 [0,1,2,0,2,3]
	mesh.addVerticesAndIndices(newVertexes,newIndices);



#### removeVerticesAndIndices(vexIdx,vexLen,iIdx,iLen)
>移除顶点与索引数组。根据顶点数组的下标和长度、索引数组的下标和长度，移除顶点数组和索引数组的元素


参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
vexIdx | number | 顶点数组的下标| 第一个元素下标为0
vexLen | number | 待删除顶点的个数| 0代表不删除
iIdx | number | 索引数组的下标| 第一个元素下标为0
iLen | number | 待删除索引的个数| 0代表不删除

返回值：无


例子：

	//延续addVerticesAndIndices方法中的例子
	//此时有四个顶点(0,0)(320,0),(320,320),(0,320)，6个索引值 [0,1,2,0,2,3]
	
	//顶点数组中，删除从中第4个开始，删除1个元素
	//索引数组中，删除从中第4个开始，删除3个元素
	mesh.removeVerticesAndIndices(3,1,3,3);
	
#### setVerticesAndIndices(vertexes,indices)
> 重置所有的顶点与索引数组


参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
vertexes | Array | 顶点数组 |
indices | Array | 顶点索引 |  

返回值：无

####  getVertices()
> 获取当前Mesh的顶点数组

参数:无

返回值：

 类型 |名称 | 备注
------------- | ------------- | -------------
 Array |顶点数组 | 元素形如 {"x":0, "y":0,"z":0,"r":1,"g":1,"b":1,"a":1,"u":0,"v":0}

#### getIndices()
> 获取当前Mesh的索引数组

参数:无

返回值：

 类型 |名称 | 备注
------------- | ------------- | -------------
 Array |索引数组 | 元素类型为number

### 例子
查看 script/demo/render/mesh_demo.js