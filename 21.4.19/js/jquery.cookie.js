; (function ($, window) {
    $.extend({
        addCookie: function (key, val, day, path, domain) {
            // 1.处理默认保存的路径
            let index = window.location.pathname.lastIndexOf("/");
            let currentPath = window.location.pathname.slice(0, index);
            path = path || currentPath;
            //2.处理默认保存的domain
            domain = domain || document.domain;
            //3.处理默认保存的过期时间
            if (!day) {
                document.cookie = `${key}=${val};path=${path};domain=${domain}`;
            } else {
                let date = new Date();
                date.setDate(date.getDate() + day);
                document.cookie = `${key}=${val};expires=${date.toGMTString()};path=${path};domain=${domain};`;
            }

        },
        getCookie: function (key) {
            let res = document.cookie.split(',');
            for (let i = 0; i < res.length; i++) {
                let temp = res[i].split('=');
                if (temp[0].trim() === key) {
                    return temp[1];
                }
            }
        },
        //默认只能删除默认路径中的cookie，要删除别的要指定路径
        delCookie: function (key, path) {
            addCookie(key, getCookie(key), -1, path);
        }
    });
})(jQuery, window);