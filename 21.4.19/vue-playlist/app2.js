new Vue({
    el: "#vue-app",
    data: {
        a: 0,
        b: 0,
        age: 20,
        changeColor: false,
        changeLength: false,
        error: false,
        success: false,
        arr: ["rng", "ig", "edg"],
        users: [
            { name: "lrj", age: 19 },
            { name: "lrj", age: 19 },
            { name: "lrj", age: 19 }
        ]
    },
    methods: {

    },
    computed: {
        addToA: function () {
            console.log("AAA")
            return this.a + this.age;
        },
        addToB: function () {
            console.log("BBB")
            return this.b + this.age;
        },
        compClasses: function () {
            return {
                changeColor: this.changeColor,
                changeLength: this.changeLength
            }
        }
    }
});