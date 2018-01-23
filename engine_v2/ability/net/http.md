# http/https


### 简单的http请求
下面例子为，从http下载一张图png图，并且将其作为纹理，最终绘制到精灵上

```
function onResponseImage (res,code)
{
    var resPicTexture = BK.Texture.createTextureWithBuffer(res);
    var icon =new BK.Sprite(279,132,resPicTexture,0,1,1,1);
    //居屏幕中央
    icon.position = {x:BK.Director.screenPixelSize.width/2.0,y:BK.Director.screenPixelSize.height/2.0}
    icon.anchor = {x:0.5,y:0.5};
    BK.Director.root.addChild(icon);
}
var httpimagreq = new BK.HttpUtil("https://sqimg.qq.com/qq_product_operations/im/qqlogo/imlogo_b.png");
httpimagreq.setHttpMethod("get");
httpimagreq.requestAsync(onResponseImage);
```