//实例化vue对象
new Vue({
    el: "#vue-app",
    data: {
        name: "",
        age: "",
        website: "https://www.baidu.com",
        websiteTag: "<a href='https://www.baidu.com'>web开发</a>",
        x: 0,
        y: 0,

    },
    methods: {
        // greet: function (str) {
        //     return `hello ${str} , ${this.age}`;
        // }
        add: function (inc) {
            return this.age += inc;
        },
        sub: function () {
            return this.age--;
        },
        updateXY: function (event) {
            // console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        stopMove: function () {

        },
        logName: function () {
            // console.log("你正在输入名字")
            this.name = this.$refs.name.value;
        },
        logAge: function () {
            // console.log("你正在输入年龄")
            this.age = this.$refs.age.value;
        }
    }
});
