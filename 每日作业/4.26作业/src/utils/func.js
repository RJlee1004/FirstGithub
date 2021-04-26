(function() {
  /* 微信字体大小 */
  if (
    typeof WeixinJSBridge == "object" &&
    typeof WeixinJSBridge.invoke == "function"
  ) {
    handleFontSize();
  } else {
    document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
  }
  function handleFontSize() {
    // 设置网页字体为默认大小
    WeixinJSBridge.invoke("setFontSizeCallback", { fontSize: 0 });
    // 重写设置网页字体大小的事件
    WeixinJSBridge.on("menu:setfont", function() {
      WeixinJSBridge.invoke("setFontSizeCallback", { fontSize: 0 });
    });
  }
  /* input被键盘遮盖 */
  var u = navigator.userAgent;
  // var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if (isiOS) {
    document.body.addEventListener("focusin", () => {
      setTimeout(() => {
        document.body.scrollTop = document.body.scrollHeight;
      }, 100);
    });
    document.body.addEventListener("focusout", () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
  }
  if (/Android/gi.test(navigator.userAgent)) {
    window.addEventListener(
      "resize",
      function() {
        if (
          document.activeElement.tagName == "INPUT" ||
          document.activeElement.tagName == "TEXTAREA"
        ) {
          window.setTimeout(function() {
            document.activeElement.scrollIntoView();
          }, 100);
        }
      }.bind(this)
    );
  }
})();
