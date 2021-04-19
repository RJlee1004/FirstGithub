// 向一个元素中添加指定的class属性值
// 参数:
//     obj:指定元素
//     cn: 要添加的class值
function addClass(obj, cn) {
    if (!hasClass(obj, cn)) {
        obj.className += " " + cn;
    }
}

function hasClass(obj, cn) {
    //判断obj红有没有cn class
    var reg = new RegExp("\\b" + cn + "\\b");
    return reg.test(obj.className)
}
function removeClass(obj, cn) {
    var reg = new RegExp("\\b" + cn + "\\b");
    obj.className = obj.className.replace(reg, "");
}
//切换一个类，如果元素中有该类，则删除；若没有则添加
function toggleClass(obj, cn) {
    if (hasClass(obj, cn)) {
        removeClass(obj, cn);
    } else {
        addClass(obj, cn);
    }
}
//移动动画
//obj:移动元素 attr:动画样式 target:目标 speed:速度 
//callback:回调函数
function move(obj, attr, target, speed, callback) {
    clearInterval(obj.timer);
    //判断速度正负值
    var current = parseInt(getStyle(obj, attr));
    if (current > target) {
        speed = -speed;
    }

    //向执行动画的对象中添加一个timer属性，用来保存它自己的定时器id
    obj.timer = setInterval(function () {
        var oldValue = parseInt(getStyle(obj, attr));
        var newValue = oldValue + speed;
        // console.log(newValue);
        if (speed > 0 && newValue >= target || (speed < 0 && newValue <= target)) {
            // clearInterval(obj.timer);
            newValue = target;
        }

        obj.style[attr] = newValue + "px";
        if (newValue == target) {
            clearInterval(obj.timer);
            callback && callback();
        }

    }, 30);
}

//要获取样式的元素
//要获取的样式名
function getStyle(obj, name) {
    if (window.getComputedStyle) {
        return getComputedStyle(obj, null)[name];
    } else {
        return obj.currentStyle[name];
    }
}

//拖拽
function drag(obj) {
    //拖拽box1元素
    //当鼠标在被拖拽元素上被按下时，开始拖拽
    var obj = document.getElementById(obj);

    obj.onmousedown = function (e) {
        obj.setCapture && obj.setCapture();
        e = event || window.event;

        //此时鼠标移动，元素跟随鼠标移动
        var objX = e.clientX - obj.offsetLeft;
        var objY = e.clientY - obj.offsetTop;
        document.onmousemove = function (e) {
            e = event || window.event;
            console.log(e);
            var X = e.clientX;
            var Y = e.clientY;
            // var Width = obj.clientWidth / 2;
            // var Height = obj.clientHeight / 2;

            obj.style.left = X - objX + 'px';
            obj.style.top = Y - objY + 'px';
        }
        //鼠标松开，元素固定在最终位置
        document.onmouseup = function () {
            //取消onmousemove
            document.onmousemove = null;
            document.onmouseup = null;
            // alert("鼠标松开了！");

            obj.releaseCapture && obj.releaseCapture();
        }

        // return false;
    }
}