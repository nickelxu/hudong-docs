# 2.5 BK.Button

> 按钮类 继承自 BK.Sprite
>
> 需要引用button.js

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
	
	var btn = new BK.Button(100,50,'GameRes://texture/rl_btn_confirm_normal.png',function () {
                        log("button click!")
                    });

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


例子：
	
	btn.setDisableTexturePath('GameRes://texture/rl_btn_confirm_press.png');