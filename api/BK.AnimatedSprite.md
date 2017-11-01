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

####  play()

> 开始播放

参数：无


返回值：无


例子：无


### 例子
查看 script/demo/render/animatedSprite_demo.js