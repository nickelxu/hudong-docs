#前端SDK接口

###前端调用接口
| 前端SDK接口名              | 作用  | 调用方式 | 必须传递参数
| :------------- | :-----:| :----:| ---:|
| getActConf             | 查询活动配置信息 | hudong.getActConf() | 无 |
| getActDetail           | 查询用户活动匹配结果 | hudong.getActDetail() | 无|
| exchangeGift           | 兑换奖品 | hudong.exchangeGift({pkgid: ***})| pkgid：兑换id|
| getPkgInfo             | 查询领奖结果 | hudong.getPkgInfo() | 无|

###前端调用示例
hudong为全局对象，以下为查询活动配置信息示例
```javascript
hudong.getActConf({
    success: function(re) {
        console.log(re);
    },
    error: function(error) {
        console.log(error);
    }
})
/* success 返回
{
    "code": 0,
    "message": "success",
    "data": {
        "actconf": {
            "actid": 1,
            "gameid": 2003,
            "begTs": 1502294400,
            "endTs": 1504640000,
            "pkginfos": [{
                "pkgid": 1,
                "status": 1,
                "limit": {
                    "total": 10,
                    "month": 20,
                    "week": 20,
                    "day": 20
                },
                "decScoreid": 1,
                "decScore": 1,
                "cond": [{
                    "condname": "condCheckScore",
                    "score": 1,
                    "scoreid": 1,
                    "condid": 1
                }],
            "gifts": [{
                "handle": "sendScore",
                "giftid": 2,
                "num": 2,
                "desc": "二类积分"
                }]
            }]
        },
        "actdata": {
             "actid": 1,
             "data": {
                "actid": 1,
                "data": {
                    "ticket": 90000,
                    "prize": 4999
                }
             }
        }
    }
}
 */
```