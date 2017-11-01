# 2.25 Q&A


#### Q: 如何实现继承？
A：参考button.js的实现即可

#### Q：BK.Node.children可直接修改吗？
A:不可以。children是只读属性，如需对子节点进行增删，需调用addChild、removeFromParent、removeChildById等函数。

