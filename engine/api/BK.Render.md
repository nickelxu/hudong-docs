# 2.13 BK.Render 渲染器

### BK.Render
> 渲染器

### 方法

#### clear(red,green,blue,alpha)
> 清除颜色缓冲区

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
red | number |红色|
green | number |绿色|
blue | number |蓝色|
alpha | number |透明度|

例子：

 	BK.Render.clear(1,1,1,1); //r,g,b,a
 	
 
#### render(node,duration)
> 渲染单个节点

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
node | BK.Node及其子类 | 渲染的节点|
duration | number |帧间隔|

例子：

 	BK.Render.render(ndoe,duration);
  
#### commit()
> 将

参数 ：无
返回值：无

例子：

 	BK.Render.commit();                  
