## 游戏内购

使用BK.QQ.qPayPurchase，开发者传入道具id以及对应的数量，就可拉起支付界面。

开发者通过判断回调中的错误码得知支付成功与否。

#### BK.QQ.qPayPurchase(gameOrientation,transparent,itemList,callback)

变量  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
gameOrientation | number | 屏幕方向 | 1（默认，竖屏）2.横屏（home键在左边）3.横屏 （home键在右边）
transparent | boolean | 是否透明 | 
itemList | Array | 道具列表 | 具体请查看例子
callback | function | 回调函数 |  形如 function(errCode,data) 具体错误码请看本篇最下


例子

```

var gameOrientation =  1;   //1（默认，竖屏）2.横屏（home键在左边）3.横屏 （home键在右边）
var itemList = [           //ios 不需要 android需要
    {
        "itemId": 1,    //道具id，非负整数
        "itemNum":3     //道具数目，非负整数    
    }
]

/**
 * gameOrientation  //1（默认，竖屏）2.横屏（home键在左边）3.横屏 （home键在右边）
 * transparent 是否透明
 * itemList 道具列表
 * callback 形如 function(errCode,data)
 */
BK.QQ.qPayPurchase(1,true,itemList,function(errCode,data){
    BK.Script.log(1,1,"qPayPurchase errCode:"+errCode+" data:"+JSON.stringify(data));
    
    // data.code == 0代表成功
    if(data.code == 0){
    	var itemList = data.itemList;
    	for(i = 0;i<data.itemList.length;i++){
    		var itemId = itemList[i].itemId;
    		var itemNum = itemList[i].itemNum;
    	}
    	var gameId = data.gameId;
    }else{
    	  //data.code != 0代表购买失败
    }
});
```

## data.code错误码

错误码  | 说明
------------- | -------------
35308 |道具没有配置
35311 |道具已下架
35312 |绝版道具已过期
35313 |用户已经拥有该道具
35315 |所选的道具有多种货货类型
35316 |用户货币余额不足
