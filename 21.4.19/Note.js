/*
    如果后端返回的非标准的JSON字符串
    var obj = eval(`(${json})`);
*/
/*
    cookie:会话跟踪技术 客户端
    session:会话跟踪技术 服务端
    作用：将网页中的数据保存到浏览器中
    cookie默认不会保存任何数据
    cookie生命周期：
        默认情况下生命周期是一次会话，即
        浏览器被关闭
        expires" + date.toGMTString() + ";"设置过期时间
    cookie不能一次设置多条数据，只能一条一条设置
    cookie有大小和个数限制
        个数限制在20~50
        大小限制在4kb
    作用范围：
        同一个浏览器的同一个路径下访问
        同一个浏览器默认下一级路径也可以访问
        path=/;表示保存到根目录，整个网站都可以访问
    例如：www.it666.com下有个cookie，而想在edu.it666.com中访问
    此cookie，则需要添加domain=it666.com;
*/
/*
    哈希:一般用于页数绑定
*/
/*
vue:
    渐进式：没有很多限制的框架
    el:element 需要获取的元素，一定是html中的根容器元素
    data:用于数据存储 取数据的话必须在标签内写{{}}
    methods:用于存储各种方法
    属性绑定：v-bind:属性名="data中的属性名"，就可以获得属性值中保存的内容
    动态标签：v-html="data中的属性名"，就可以获取属性值中保存的标签
    标签内的方法必须加括号，而绑定事件括号看情况加，例如需要传参
    事件绑定v-on:  相当于使用@
    事件展示v-show:仅仅是设置改变了display属性
    事件:
        click:单击事件
        dblclick：双击事件
    事件修饰符:
        .once:只有一次触发
        .stop:触发即停止
        .prevent:阻止默认事件
        .enter
        .alt
    双向数据绑定:v-model 和 this.name = this.$refs.name.value;
    计算属性:适用于耗时大量的搜索等等
    虚拟DOM与真实DOM不同时，才会触发属性
    v-if 和 v-else-if
    v-for
        其中key值使用需要在加()括号

*/