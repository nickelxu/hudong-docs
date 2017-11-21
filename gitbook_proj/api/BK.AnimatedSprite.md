# 2.22 BK.AnimatedSprite 
#### 父类：BK.Sprite
>帧动画


### 成员变量
变量  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
delayUnits | number | 每一帧持续时间 |每一帧持续时间，以秒为单位。默认1/30秒
paused | boolean | 暂停 | true暂停，false运行
###方法
#### 构造函数 new BK.AnimatedSprite(textureInfoArr)

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
textureInfoArr | Array | 纹理对象信息数组 | 


例子：
```
var texPath = "GameRes://texture/spritesheet/fighter.png";
var jsonPath = "GameRes://texture/spritesheet/fighter.json";
BK.SpriteSheetCache.loadSheet(jsonPath, texPath);
var textureInfoArr = new Array();
for (var i = 0; i < 30; i++) {
    var val = i < 10 ? '0' + i : i;
    var textureInfo = BK.SpriteSheetCache.getTextureFrameInfoByFileName('rollSequence00' + val + '.png');
    textureInfoArr.push(textureInfo);
}
var aniSp = new BK.AnimatedSprite(textureInfoArr);
```

####  play(beginFrameIdx,repeatCount)

> 开始播放

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
beginFrameIdx | number | 开始播放的帧数（选填，默认为0）| 
repeatCount | number | 播放次数（选填，默认-1，代表无限循环）| 


返回值：无


例子：无

#### stop(frameIdx)
>结束播放
>

参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
frameIdx | number | 停止时显示的帧（选填，默认为-1，随机选取一帧最后显示）| 

例子：无

#### setCompleteCallback(callback)
>设置每次播放完毕的回调


参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
callback | function | 每播完一次的回调| 具体参数如例子

例子：

```
//播放完一次的回调。其中ani为BK.AnimatedSprite对象，count为当前播放的次数
aniSp.setCompleteCallback(function (ani,count) {
    BK.Script.log(0,0,"setCompleteCallback count:"+count);
    // aniSp.paused = true;
});
```

#### setEndCallback(callback)
>设置全部播放完的回调


参数：

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
callback | function | 全部播放完的回调 | 具体参数如例子

例子：

```
//全部播放完的回调。其中ani为BK.AnimatedSprite对象，count为当前播放的次数
aniSp.setEndCallback(function (ani,count) {
    BK.Script.log(0,0,"setEndCallback count:"+count);
});
```
### 例子
查看 script/demo/render/animatedSprite_demo.js