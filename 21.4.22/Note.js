/*
组件化 --任何应用抽象成一棵组件树，方便组织和管理
创建组件构造器{
  Vue.extend()方法创建组件构造器;
  其中的模板template:
}
注册组件{
  Vue.component()方法
  Vue.component("组件标签名",组件构造器)这里注册是全局组件
}
使用组件

全局组件和局部组件{
  全局组件:
    Vue.component();
  局部组件：
    components: {
      组件标签名: 组件构造器
    }
}

父组件与子组件{}
注册组件语法糖{
  不用extend方法，直接写在component中
}

组件模板分离{
  <script type="text/x-template" id="cpn1"></script>

  <template id="cpn2"></template>
}

组件是一个单独功能模块的封装，要有HTML模板和自己的数据data，组件无法直接访问Vue实例
组件中的data属性必须是一个函数且返回一个对象，对象内部保存了数据
组件中data为何必须是函数{
  利用了函数的闭包功能，使每个组件实例的数据都是独立且相互不影响的
}

父子组件通信{
通过props向子组件传递数据{
  传值字符串数组和对象{
    props中的数据可以以对象写法，并且提供类型限制、默认值和是否必须传值
    类型也可以是自定义类型
    cmsg:{
      type:String,
      default:'1111',
      required:true   //必须传此值
    }
    carr:{        //注意数组和对象的默认值必须是一个工厂函数
      type:Array,
      default(){
        return []
      }
    }
    还可以自定义验证{
      validator:function(value){}
    }
  }
  bind绑定子组件属性时，不支持驼峰式写法，而要在驼峰之间加-横杠来解决
  如果模板内部标签很多，必须用一个div根标签包含住
}
通过事件向父组件发送消息(自定义事件$emit()){
  子传父常用于  子组件触发了什么事件需要父组件知道
}
}
父子组件访问{
  父访问子{
    $children
    $refs
  }
  子访问父{
    $parent
    $root:根目录
  }
}

slot插槽{
  物理上的插槽让设备具备更多的扩展性，比如电脑的usb可以插入u盘、手机、硬盘等
  组件上的插槽也为了让组件具备更多的扩展性,
  将共性提取出来，不同设置为插槽
  方法：在模板里写一个slot标签，在使用此模板时，在模板标签内写什么标签就显示什么标签，
  而且插槽slot标签内部可以写标签和内容当做默认

  具名插槽{
    有多个插槽但只需要修改其中一个插槽时，就要给插槽起名字区分了
  }

  编译作用域{

  }
}
*/