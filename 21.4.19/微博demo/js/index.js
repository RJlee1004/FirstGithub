$(() => {
    // 0.监听内容的实时输入
    $("body").delegate(".comment", "propertychange input", function () {
        if ($(this).val().length > 0) {
            $(".send").prop("disabled", false);
        } else {
            $(".send").prop("disabled", true);
        }
    })
    $(".send").click(function () {
        let $text = $(".comment").val();
        $.ajax({
            type: "get",
            url: "php/weibo.php",
            data: "data",
            dataType: "dataType",
            success: function (response) {

            }
        });
        //根据内容创建节点
        let $weibo = createEle($text);
        //插入微博
        $(".messageList").prepend($weibo);

    })
    $("body").delegate(".infoTop", "click", function () {
        $(this).text(parseInt($(this).text()) + 1)
        // alert("ding");
    })
    $("body").delegate(".infoDown", "click", function () {
        $(this).text(parseInt($(this).text()) + 1)
        // alert("cai");
    })
    $("body").delegate(".infoDel", "click", function () {
        // alert("del");
        $(this).parents(".info").remove();
    })
    //创建节点的方法
    function createEle(text) {
        let $weibo = `<div class="info">
            <p class="infoText">${text}</p>
            <p class="infoOpera">
                <span class="infoTime">${formartDate()}</span>
                <span>
                    <a href="javascript:;" class="infoTop">0</a>
                    <a href="javascript:;" class="infoDown">0</a>
                    <a href="javascript:;" class="infoDel">删除</a>
                </span>
            </p>
        </div>`;
        return $weibo;
    }
    //生成时间的方法
    function formartDate() {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hours = date.getHours();
        let min = date.getMinutes();
        let seconds = date.getSeconds();
        return `${year}-${month}-${day}  ${hours}:${min}:${seconds}`;
    }
})