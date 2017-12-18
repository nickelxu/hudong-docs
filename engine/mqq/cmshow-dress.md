# 5.4 获取厘米秀形象数据

需要预先加载protocol.js。实例代码可在sso_demo.js中查看

```
//根据openId 获取厘米秀装扮
BK.QQ.getCmshowDressInfo(GameStatusInfo.openId,function(errCode,cmd,data){
	BK.Script.log(0,0,"cmd = "+ cmd + " data = " + data);
	if(errCode == 0){
	    var jPath = BK.Script.pathForResource(data.skltPath.atlas, 'json');
	    var aPath = BK.Script.pathForResource(data.skltPath.json, 'atlas'); 
	    var ani =new BK.SkeletonAnimation(aPath, jPath, 1,null,null,null );
	    for (var i=0;i<data.dressPath.length;i++)
	    {
	        var j = data.dressPath[i].atlas;
	        var a = data.dressPath[i].atlas;
	        var jPath = BK.Script.pathForResource(j, 'json');
	        var aPath = BK.Script.pathForResource(a, 'atlas');
	        ani.setAccessory(jPath, aPath);
	    }
	    ani.position = {x:100,y:100};
	    BK.Director.root.addChild(ani);
	}
});

```