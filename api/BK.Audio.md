# 2.15 BK.Audio 音频

### 成员变量
变量  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
switch | boolean | 声音开关 | true为开，false为关


例子：

	//设置开关
	BK.Audio.switch = true; 
	
	// 获取开关
	var s = BK.Audio.switch

### 方法
#### playMusic(type,musicPath,loopCount)
>播放声音

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
type | number | 音乐类型 |  0表示背景音乐，1表示特效音乐
musicPath | string | 音乐路径 | 
loopCount | number | 重复次数  | -1为循环播放
返回值：无

例子：

	BK.Audio.playMusic(0,'GameRes://script/demo/tinyfly/music/race_background',1)


### 例子
查看 script/demo/media/audio_demo.js