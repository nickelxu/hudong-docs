# 后台回调命令字

### 活动后台逻辑的入口命令字

活动前端的SDK命令和后台命令的对应关系如下,注意这里区分大小写：

| 前端SDK    | 后端命令           | 作用  |
| ------------- |:-------------:| -----:|
| hudong.getActConf        | getActConf       | 查询活动配置信息 |
| hudong.getActDetail      | getActDetail     | 查询用户活动匹配结果 |
| hudong.exchangeGift      | exchangeGift     | 兑换奖品 |
| hudong.getPkginfo        | getPkginfo       | 查询领奖结果 |

后端命令对应了message参数中的cmd，不同的cmd除了公共参数外，请求参数中会携带不同的参数。