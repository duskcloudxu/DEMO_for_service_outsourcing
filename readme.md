# 说明
## 前言
这是一个使用ionic实现的服务外包客户端，主要配置在安卓上
## 配置
在默认的基础上增加了call-number与一个绘画板的模块，开发人员只需增加以下命令：
```$xslt
npm install
```


## 页面与原型的对应
login->登陆页面

contact->会话

contract->合同

contract-writing->合同起草

contract-supervision->合同审核

contract-management->合同管理

contract-consultant->法律助手
> 好吧我知道这个容易造成误解但是我们又不写contact

about->我的
## 开发注意事项!important
### 1. 
图片不能用相对路径，否则会造成安卓无法读取的情况，统一放在
> asset/imgs/

目录下，填写src目录时用例为：
```
<img src="assets/imgs/myLawyer.png" margin-top="10px">
```
### 2.
为了避免图片模糊被人看出是截图的情况，高清图片是有必要的。
具体操作步骤是将原型中图片在chorme中单独拖出一个标签，放大到有像素点为止，再进行截图。

直接修改图片也可，不过不好控制。

或者将浏览器放大到十分清晰的程度，然后截图之后拼接也可以。
### 3.
新建页面有教程，见参考资料。

### 4.
命名规范：若其是一个页面alice的子页面bob，则在命令中输入：
```
ionic g page aliceBob
```
具体可参照contract->contractWriting 这样的写法

## Todo-list
### 关于tabs中的图标：[solved]
需要将tab中图标的激活状态颜色改为原型中的蓝绿色。
LDY 2018.5.26

### 合同起草的页面居中：[solved]
想想看一个居中的统一模板

***
### contract-writing初始点击函数：[solved]
菜单栏应该一开始就有点击按钮，ionic里如何做到模仿交互现在还是一个问题。
XT 18点44分
***
### directive的尝试[solved]
尝试做了一个back的全局驱动，然而并没有成功，也没有报错，完全没有反应，暂时放置不管，等后面研究。
***
### slides的滑动到某页无效[solved]
干他娘的傻逼IONIC，slides的神秘bug使得这玩意根本无效。
*** <span id="jump">Hello World</span>
### show1,show2,finish增加固定顶栏[solved]
***
### 传递函数的增加,获取日期的方式，标题的定位
***
### 原型上新加的div放进去
***
### 

##debug log
Edit:经检查发现，Slides如果和[ngCLass]一起使用的话会导致部分功能失效。

如果用了ngIf的话会导致viewChildren获取不到对象，目前没有非常方便的解决方法。
***
## 参考资料
[如何新建页面](https://www.jianshu.com/p/0f024a62ba14)




