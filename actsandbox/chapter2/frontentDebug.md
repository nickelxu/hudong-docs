##测试环境问题定位

### 页面或部分静态资源无法获得
说明静态资源压缩包上传失败，相应的问题可以登录[互动游戏平台](https://hudong.qq.com),查看互动详情，里面就会列举静态资源传送失败原因。然后解决完后重新上传静态资源

### 调用sdk提供的api网络返回报错
检查设备网络完好的情况下，说明可能碰到了跨域问题，sdk请求的域名为open.hudong.qq.com,该请求只允许规定域名跨域.所以查看自己的域名是否为测试域名

### 返回接口提示用户未登录(code: 100000)
说明qq域名下显示用户未登录，如果为手q环境，用户是默认登录的，不会出现这种情况。如果是微信或者浏览器打开页面的，说明未在qq域下登录过qq，可以打开[互动游戏平台](https://hudong.qq.com),登录后再重新打开页面就可以了

### 返回接口提示沙箱错误(code: 100100)
说明沙箱处理错误，data会返回沙箱错误码。以下为沙箱错误码，根据不同的错误码进行相应操作
```
// 互动游戏平台逻辑接入代理服务错误码
// 取值范围-706000~-706999
EC_APOOLO_GAME_LOGICPROXY_QRY_APPID_FAIL = -706000,      // 查询APPID失败
EC_APOOLO_GAME_LOGICPROXY_QRY_ACT_FAIL = -706001,        // 查询活动信息失败
EC_APOOLO_GAME_LOGICPROXY_ACCOUNT_INVALID = -706002,     // 帐号状态异常
EC_APOOLO_GAME_LOGICPROXY_APPID_INVALID = -706003,       // APPID值异常
EC_APOOLO_GAME_LOGICPROXY_QRY_OPENID_FAIL = -706004,     // 查询OPENID失败
EC_APOOLO_GAME_LOGICPROXY_REQ_SBOX_FAIL = -706005,       // 请求沙箱失败。 解决方式： 后台逻辑脚本异常，请重新检查脚本是否上传或脚本处理数据时可能出错
EC_APOOLO_GAME_LOGICPROXY_GET_WHITE_FAIL = -706006,      // 获取白名单失败。解决方式：进入互动游戏平台，点击游戏管理后进入白名单，将正在测试的qq号加入白名单
EC_APOOLO_GAME_LOGICPROXY_CHK_WHITE_FAIL = -706007,      // 非白名单不允许访问测试数据。解决方式：进入互动游戏平台，点击游戏管理后进入白名单，将正在测试的qq号加入白名单
EC_APOOLO_GAME_LOGICPROXY_ACT_STATUS_INVALID = -706008,  // 活动状态异常
```

