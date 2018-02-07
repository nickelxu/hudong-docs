# 2.28 BK.QAVView 音视频展示组件

本类用于将远端视频信号绑定，并进行展示

构造函数


参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
identifier | string | 信号源标识符 | 
width | number | 组件宽 | 
height | number | 组件高 | 
autoAddMgr | boolean |是否自动监听信号|默认true。此处会自动identifier对应的信号源
parent | BK.Node | 组件加入到的父节点| 传入null时默认加入到BK.Directro.root
position | Object |位置|
zOrder | number| 同BK.Node.zorder


例子

```
var othersView = new BK.QAVView(identifier, width, height, true, undefined, pos, undefined);
```