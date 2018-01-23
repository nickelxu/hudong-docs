# 文本

文本支持如下属性，且使用时需<font color="red">预先加载Text.js</font>

属性|名称|备注
---|---|---|
fontSize|字体大小
textColor|字体颜色
maxWidth|最大宽度
maxHeight|最大高度
width|宽
height|高
textAlign|文本对齐|0水平左对齐，1水平居中对齐，2水平右对齐
bold|粗体
italic|斜体
strokeColor|描边颜色
strokeSize|描边大小
shadowRadius|阴影圆角
shadowDx|阴影偏移
shadowDy|阴影偏移
shadowColor|阴影颜色

例子：

```
BK.Script.loadlib("GameRes://script/core/ui/Text.js");
var style = {
    "fontSize": 20,  //字体大小
    "textColor": 0xFFFF0000,//字体颜色
    "maxWidth": 200,
    "maxHeight": 400,
    "width": 100,
    "height": 200,
    "textAlign": 0,
    "bold": 1,
    "italic": 1,
    "strokeColor": 0xFF000000,
    "strokeSize": 5,
    "shadowRadius": 5,
    "shadowDx": 10,
    "shadowDy": 10,
    "shadowColor": 0xFFFF0000
};
var content = "Rich New";
var txt = new BKText(style, content);
BK.Director.root.addChild(txt);
txt.fontSize = txt.fontSize;
txt.fontColor = txt.fontColor;
txt.maxSize = txt.maxSize;
txt.size = txt.size;
txt.bold = txt.bold;
txt.italic = txt.italic;
txt.horizontalAlign = txt.horizontalAlign;
txt.strokeColor = txt.strokeColor;
txt.strokeSize = txt.strokeSize;
txt.shadowColor = txt.shadowColor;
txt.shadowRadius = txt.shadowRadius;
txt.shadowOffset = txt.shadowOffset;

```

### 其他字体
暂不支持其他字体，统一为系统字体