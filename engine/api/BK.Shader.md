# 2.26 BK.Render.Material 材质渲染

### 方法
####构造方法 BK.Render.Material(vs,fs）

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
vs | string | 顶点描述文件 | 
fs | string | 段描述文件 | 


例子：

	var material = new BK.Render.Material(
	"GameRes://script/demo/render/shader/light2D.vs", 
	"GameRes://script/demo/render/shader/light2D.fs");
  
####设置属性1 setUniform1i(attr,para）
####设置属性2 setUniform1f(attr,para）
####设置属性3 setUniform2fv(attr,para）
####设置属性4 setUniform3fv(attr,para）
####设置属性5 setUniform4fv(attr,para）
参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
attr | string | 属性名称 | 可选值： lightPos,adjustAtt,lightColor,ambientColor
para | int float Array | 属性值   |  使用不同函数参数根据函数不同而不同


例子：

	material.setUniform3fv("lightPos", [210, 202, 1]);
	material.setUniform3fv("adjustAtt", [0.05, 0.0001, 0.0001]);
	material.setUniform4fv("lightColor", [1.0, 0.8, 0.6, 1.0]);
	material.setUniform4fv("ambientColor", [0.5, 0.6, 0.6, 1.0]);
  
  
####设置属性5 setUniform4fv(attr,para）
参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
attr | string | 属性名称 | 可选值： lightPos,adjustAtt,lightColor,ambientColor
para | int float Array | 属性值   |  使用不同函数参数根据函数不同而不同


例子：

	material.setUniform3fv("lightPos", [210, 202, 1]);
	material.setUniform3fv("adjustAtt", [0.05, 0.0001, 0.0001]);
	material.setUniform4fv("lightColor", [1.0, 0.8, 0.6, 1.0]);
	material.setUniform4fv("ambientColor", [0.5, 0.6, 0.6, 1.0]);
  
  
  ##实例代码
详细代码请参考
```BK.Script.loadlib("GameRes://script/demo/render/clip_node_demo.js");```
  
  
  