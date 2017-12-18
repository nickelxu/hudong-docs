# 2.5 BK.Button

> 按钮类 继承自 BK.Sprite
>
> 需要引用button.js
> 
> 需要注意的是：其父节点都需要将canUserInteract置true

### 成员变量
变量  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
disable | boolean | 禁止态 | 无


### 方法
#### 构造函数 new BK.Button(width,height,normalTexPath,callbackFunc)

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
width | number | 宽度 |
height | number | 高度 |
normalTexPath | string | 默认态纹理路径 |
callbackFunc | function | 点击回调 |

例子：

```
//callbackFunc中的参数为BK.Button对象
var btn = new BK.Button(100,50,'GameRes://texture/rl_btn_confirm_normal.png',function (btn) {
                    BK.Script.log("button click!");
                });
var superNode = new BK.Node();
//其父节点都需要将canUserInteract置true
superNode.canUserInteract = true;
superNode.addChild(btn);

```

#### setPressTexturePath
> 设置点击态图片

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
path | string | 图片路径 |


例子：
	
	btn.setPressTexturePath('GameRes://texture/rl_btn_confirm_press.png');
	
#### setDisableTexturePath
> 设置禁止态图片

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
path | string | 图片路径 |


例子：
	
	btn.setDisableTexturePath('GameRes://texture/rl_btn_confirm_press.png');


#### setNormalTexturePath
> 设置默认态图片

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
path | string | 图片路径 |


#### setNormalTextureFromSheetInfo
> 通过图集设置设置点击态图片

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
sheetInfo | Object |小图图集信息 |

返回值：无


例子：
	
```
var texPath = "GameRes://resource/texture/spritesheet/test.png";
var jsonPath = "GameRes://resource/texture/spritesheet/test.json";
BK.SpriteSheetCache.loadSheet(jsonPath,texPath);

var normal = 'GameRes://resource/texture/rl_btn_confirm_normal.png'
var btn = new BK.Button(200,100,normal,function (node) {
                        BK.Script.log(0,0,"button click! id = " + node.id);
                    });
                    
/**
 *  通过路径设置normal、press、disable纹理
 */
btn.setNormalTexturePath('GameRes://resource/texture/rl_btn_confirm_normal.png');
btn.setPressTexturePath('GameRes://resource/texture/rl_btn_confirm_press.png');
btn.setDisableTexturePath('GameRes://resource/texture/terrain.png');
    
```
	
#### setPressTextureFromSheetInfo
> 通过图集设置设置禁止态图片

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
sheetInfo | Object |小图图集信息 |

返回值：无


例子：同setNormalTextureFromSheetInfo方法


#### setDisableTextureFromSheetInfo
> 通过图集设置设置默认态图片

参数  | 类型 |名称 | 备注
------------- | ------------- | -------------| -------------
sheetInfo | Object |小图图集信息 |

返回值：无

例子：同setNormalTextureFromSheetInfo方法