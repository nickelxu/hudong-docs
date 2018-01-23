# 音频

## 播放、暂停、继续、停止声音
```
/*
    播放声音
    @type 类型 0表示背景音乐，1表示特效音乐
    @musicPath 音乐路径
    @loopCount 重复次数 -1为循环播放
*/
var handle = new BK.Audio(0,'GameRes:///resource/audio/race_background.mp3',1)

//播放
handle.startMusic();

//暂停
handle.pauseMusic();

//继续播放
handle.resumeMusic();

//停止播放
// handle.stopMusic();


```

## 停止所有声音
调用如下代码可以停止所有的声音。
如重置为BK.Audio.switch = true。原有声音并不会自动重新播放

```
 BK.Audio.switch = false;
```
