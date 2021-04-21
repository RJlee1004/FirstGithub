/*
computed:
使用计算属性不需要加（）
计算属性有缓存,不会多次调用
计算属性有set和get方法，但一般不写set方法
*/

/*
let与var
变量作用域:
无块级作用域：闭包可以解决
在开发中优先使用const，需要改变标识符时才使用let
const定义时必须赋值且后续不能修改，但是
指向的对象不能修改，但对象内部的属性可以修改
*/

/*
v-on:click=""   @click=""
vue默认传入一个event对象
主动获取event对象用$event传参
修饰符：stop:阻止事件冒泡
    prevent:阻止默认事件
    @keyup.enter
    native:监听组件
    once:触发一次
虚拟DOM再次渲染时不会重新构建，而是对比找出新的变化做出改变渲染
这样就会出现复用问题，如果不希望，可以添加标识符key，
使key的值不一样就解决了
*/

/*
v-if:条件为false，整个元素被删除
v-show:条件为false，只是添加了display属性
v-for：带:key可以增强性能，但必须是和展示的item相同
index并不能起到此作用，即高效的更新虚拟DOM

数组的常用方法均为响应式，但索引值修改不是，可以使用splice替换或者
Vue.set方法

filter函数：过滤true才添加新数组
map函数： 遍历并且映射操作
reduce函数：对数组中所有内容进行汇总
    参数1 fn（pre,n）：返回上一次计算的值
    参数2 初始值
*/

/*
v-model:双向绑定
@input事件监听输入框的值
*/

/*
Git:
1.分布式版本控制系统
2.版本控制系统就是记录每次的修改提交等
3.常用操作
分支命名规范：lrj_0421_工单号_功能简介
    clone   复制
    add
    commit  提交到
    push    提交到远程仓库
    pull    远程仓库拉本地
    fetch   相当于刷新！！！
    
    merge（合并）
    status（状态）
*/
