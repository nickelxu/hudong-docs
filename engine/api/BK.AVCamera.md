# 2.29 BK.AVCamera.md 摄像头展示组件

本类用于展示本地摄像头信号

### start(cfg)
>开始展示摄像头

具体cfg的类型如下

属性  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
identifier | string | 信号源标识符 | 如传入“”则默认为本地摄像头
width | number | 组件宽 | 
height | number | 组件高 | 
needFaceTracker | boolean |是否开启人脸检测|
skipFaceTrackerNum | number | 人脸检测帧频
position | Object |位置|
parent | BK.Node | 组件加入到的父节点| 传入null时默认加入到BK.Directro.root
onPrePreview | function| 每帧回调
scaleSample | number| 采样大小


例子

```
 var avCamera = BK.AVCamera.start({
    identifier: "",
    width: uiManager.options.designWidth / 2.0,
    height: uiManager.options.designHeight / 2.0,
    scaleSample: 0.125,
    needFaceTracker: false,
    skipFaceTrackerNum: 60,
    //parent: nil, // 父亲节点，默认为root
    position: { x: uiManager.options.designWidth / 2.0, y: 0, z: 0 },
    onPrePreview: function (frameData) {
        //BK.Script.log(1, 0, "features = " + JSON.stringify(frameData.faceFeatures));
    }
});
```