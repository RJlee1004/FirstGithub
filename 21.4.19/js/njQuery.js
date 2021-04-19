(function (window, undefined) {
    var njQuery = function () {
        return new njQuery.init();
    }
    njQuery.prototype = {
        constructor: njQuery,
        jquery: "1.1.0",
        selector: "",
        length: 0,
        //[].push找到数组的push方法
        //冒号前面的push将来有njQuery对象先用
        //相当于[].push.apply(this)
        push: [].push,
        sort: [].sort,
        splice: [].splice,
        toArray: function () {
            return [].slice.call(this);
        },
        get: function (num) {
            if (arguments.length == 0) {
                return this.toArray();
            } else if (num >= 0) {
                return this[num];
            } else {
                return this[this.length + num];
            }
        },
        eq: function (num) {
            if (arguments.length == 0) {
                return new njQuery();
            } else {
                return njQuery(this.get(num));
            }
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1);
        },
        each: function (fn) {
            njQuery.each(this, fn);
        }

    }
    njQuery.prototype.init.prototype = njQuery.prototype;
    window.njQuery = window.$ = njQuery;
    //0.去除字符串两端的空格
    selector = njQuery.trim(selector);


    if (!selector) {
        return this;
    } else if (njQuery.isFuntion(selector)) {
        njQuery.ready(selector);
    }
    else if (njQuery.isString(selector)) {
        // console.log("字符串");
        //判断代码片段<a>
        if (njQuery.isHTML(selector)) {
            //根据代码片段创建所有元素
            let temp = document.createElement("div");
            temp.innerHTML = selector;
            //将创建好的一级元素添加到JQ对象中
            // for (let i = 0; i < temp.children.length; i++) {
            //     this[i] = temp.children[i];
            // }
            //添加length属性
            // this.length = temp.children.length;
            [].push.apply(this, temp.children);
            return this;
        } else {
            let res = document.querySelectorAll(selector);//判断选择器
            // for (let i = 0; i < res.children.length; i++) {
            //     this[i] = res[i];
            // }
            // 添加length属性
            // this.length = res.length;
            [].push.apply(this, res);
            return this;
        }

    } else if (njQuery.isArray(selector)) {
        // console.log("是数组");
        // if (({}).toString.apply(selector) === "[Object Array]") {
        //     [].push.apply(this, selector);
        //     return this;
        // } else {
        //     let arr = [].slice.apply(selector);
        //     [].push.apply(this, arr);
        //     return this;
        // }
        let arr = [].slice.apply(selector);
        [].push.apply(this, arr);
        return this;
    } else {
        this[0] = selector;
        this.length = 1;
    }
    njQuery.extend = njQuery.prototype.extend = function (obj) {
        for (let key in obj) {
            this[key] = obj[key];
        }
    }
    njQuery.extend({
        isString: function (selector) {
            return typeof selector === 'string'
        },
        isHTML: function (selector) {
            return selector.charAt(0) == "<" &&
                selector.charAt(selector.length - 1) == ">" &&
                selector.charAt >= 3;
        },
        isObject: function (selector) {
            return typeof selector === "object";
        },
        isWindow: function (selector) {
            return selector === window;
        },
        isArray: function (selector) {
            if (njQuery.isObject(selector) && !njQuery.isWindow(selector) &&
                "length" in selector) {
                return true;
            }
            return false
        },
        isFuntion: function (sele) {
            return typeof sele === "";
        },
        trim: function (str) {
            if (!njQuery.isString(str)) {
                return;
            }
            if (str.trim) {
                return str.trim();
            } else {
                return str.replace(/^\s+| \s+$/g, "");
            }
        },
        ready: function () {
            //判断DOM是否加载完毕
            //onload会等到DOM元素及资源都加载完毕才执行
            //DOMContentLoaded事件只会等到DOM元素加载完毕就执行
            //onreadystatechange事件可以监听document.readyState属性的改变
            //document.atactEvent("",function(){})
            if (document.readyState == "complete") {
                fn();
            } else if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", function () {
                    fn();
                })
            } else {
                document.attachEvent("onreadystatechange", function () {
                    fn();
                })
            }
        },
        each: function (obj, fn) {
            if (njQuery.isArray(obj)) {
                for (let i = 0; i < obj.length; i++) {
                    // let res = fn(i, obj[i]);
                    let res = fn.call(obj[i], i, obj[i]);
                    if (res === true) {
                        continue;
                    } else if (res === false) {
                        break;
                    }
                }
            } else if (njQuery.isObject(obj)) {
                for (let key in obj) {
                    // let res = fn(key, obj[key]);
                    let res = fn.call(obj[key], key, obj[key]);
                    if (res === true) {
                        continue;
                    } else if (res === false) {
                        break;
                    }
                }
            }
            return obj;
        },
        map: function (obj, fn) {
            let res = [];
            if (njQuery.isArray(obj)) {
                for (let i = 0; i < obj.length; i++) {
                    let temp = fn(obj[i], i);
                    if (temp) {
                        res.push(temp);
                    }
                }
            } else if (njQuery.isObject(obj)) {
                for (let key in obj) {
                    let res = fn(obj[key], key);
                    if (temp) {
                        res.push(temp);
                    }
                }
            }
            return res;
        }
    });
    njQuery.prototype.extend({
        empty: function () {
            this.each(function (key, val) {
                val.innerHTML = "";
            });
            //方便链式编程
            return this;
        },
        remove: function (sele) {
            if (arguments.length == 0) {
                //遍历指定的元素
                this.each(function (key, val) {
                    //根据遍历到的元素找到父元素，再删除
                    let parent = val.parentNode;
                    parent.removeChild(val);
                });
            } else {
                let $this = this;
                //根据传入的选择器找到对应的元素
                $(sele).eac(function (key, value) {
                    //遍历找到的元素获取对应的类型
                    let type = value.tagName;
                    $this.each(function (k, v) {
                        let t = v.tagName;
                        if (t === type) {
                            let parent = val.parentNode;
                            parent.removeChild(val);
                        }
                    })
                })
                //遍历指定的元素
                //获取指定元素的类型
                //判断找到元素的类型和指定元素的类型是否相匹配
            }
            return this;
        },
        html: function (content) {
            if (arguments.length === 0) {
                return this[0].innerHTML;
            } else {
                this.each(function (key, val) {

                })
            }
        },
        text: function (content) {
            if (arguments.length === 0) {
                let res = "";
                this.each(function (key, val) {
                    res += val.innerText;
                });
                return res;
            } else {

            }
        },

    });

})(window)