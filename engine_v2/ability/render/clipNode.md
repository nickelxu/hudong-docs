# 蒙版

提供两种方法使用蒙版

方法1.创建一个蒙版节点

方法2.已有一个普通的节点（BK.Sprite）。通过赋值蒙版对象达到效果

### 方法1 创建一个蒙版节点 使用方法
1. 新增一个模板纹理
2. 通过模板纹理创建蒙版节点
3. 加入一个叠加精灵
4. 设置叠加参数


### 例子：

```
//对应下图例1
var wid = BK.Director.screenPixelSize.width
var stencilTex = new BK.Texture("GameRes://texture/mask/mask1.png");
var stencilSp = new  BK.Sprite(wid, wid, stencilTex, 0, 1, 1, 1);
var clipNode =new BK.ClipNode(stencilSp);
var tex = new BK.Texture("GameRes://texture/icon.png");
var sp =new BK.Sprite(wid,wid,tex,0,1,1,1);

BK.Director.root.addChild(clipNode);
clipNode.addChild(sp);
clipNode.inverted = true;
clipNode.alphaThreshold = 0.5;

//对应下图例2
var wid = BK.Director.screenPixelSize.width
var stencilTex = new BK.Texture("GameRes://texture/mask/mask1.png");
var stencilSp = new  BK.Sprite(wid, wid, stencilTex, 0, 1, 1, 1);
var clipNode =new BK.ClipNode(stencilSp);
var tex = new BK.Texture("GameRes://texture/icon.png");
var sp =new BK.Sprite(wid,wid,tex,0,1,1,1);

BK.Director.root.addChild(clipNode);
clipNode.addChild(sp);
clipNode.inverted = false;
clipNode.alphaThreshold = 0.5;

```
	
	
### 具体图示
蒙版节点的两个属性inverted与alphaThreshold用于决定蒙版区域。

![](./img/clippingnode.png)


##实例代码
详细代码请参考
```BK.Script.loadlib("GameRes://script/demo/render/ClippingNodeDemo.js");```