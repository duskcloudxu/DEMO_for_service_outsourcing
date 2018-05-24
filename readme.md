# 说明
## 前言
这是一个使用ionic实现的服务外包客户端，主要配置在安卓上
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
### 关于tabs中的图标：
暂时先拿其他图标应付下，查了下这个在各个系统中都会出现不一样的情况，估计得自己找图自己改。
XT 2018年5月16日08:53:02
***
### contract-writing初始点击函数：
菜单栏应该一开始就有点击按钮，ionic里如何做到模仿交互现在还是一个问题。
XT 18点44分
***
### directive的尝试
尝试做了一个back的全局驱动，然而并没有成功，也没有报错，完全没有反应，暂时放置不管，等后面研究。

## 参考资料
[如何新建页面](https://www.jianshu.com/p/0f024a62ba14)




