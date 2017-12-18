# 2.14 BK.Time 时间

### 成员变量
变量  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
clock | number | 计算机CPU时钟时间 | 只读
timestamp | number | Unix 时间戳 | 只读。单位为秒


例子：

	var cpuClock = BK.Time.clock;
	var timestamp = BK.Time.timestamp;
  