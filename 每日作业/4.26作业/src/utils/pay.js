class Pay {
  /**
   * 微信公众号支付
   * @param {} data
   */
  static wechatPay(data) {
    if (!data) {
      console.error("wechatPay: 未传参数");
      return;
    }
    const { appId, timeStamp, nonceStr, wxPackage, signType, paySign } = data;
    return new Promise((resolve, reject) => {
      try {
        WeixinJSBridge.invoke(
          "getBrandWCPayRequest",
          {
            appId,
            timeStamp,
            nonceStr,
            package: wxPackage,
            signType,
            paySign
          },
          function(res) {
            if (res.err_msg == "get_brand_wcpay_request:ok") {
              // 支付成功后的操作
              resolve();
            } else if (res.err_msg == "get_brand_wcpay_request:cancel") {
              // 取消支付的操作
              reject("取消支付");
            } else {
              // 支付失败的操作
              reject("支付失败");
            }
          }
        );
      } catch (e) {
        reject("支付异常");
      }
    });
  }
  /**
   * 微信H5支付
   * @param {} mwebUrl H5支付地址
   */
  static wechatH5Pay(mwebUrl) {
    if (!mwebUrl) {
      console.error("wechatH5Pay: 未传参数 mwebUrl");
      return;
    }
    window.location.href = mwebUrl;
  }

  /**
   * 支付宝生活号支付
   * @param {string} tradeNO
   */
  static aliPay(tradeNO) {
    if (!tradeNO) {
      console.error("aliPay: 未传参数 tradeNO");
      return;
    }
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line
      ap.tradePay(
        {
          tradeNO
        },
        function(resData) {
          const data = JSON.parse(JSON.stringify(resData));
          if (data.resultCode === "9000") {
            // 支付成功
            resolve();
          } else if (data.resultCode === "6001") {
            // 用户取消
            reject("取消支付");
          }
        }
      );
    });
  }
  /**
   * 支付宝H5支付
   * @param {} data
   */
  static aliH5Pay(data) {
    if (!data) {
      console.error("aliH5Pay: 未传参数 data");
      return;
    }
    const id = "aliH5PayDiv";
    const payDiv = document.getElementById(id);
    if (payDiv) {
      document.body.removeChild(payDiv);
    }
    const div = document.createElement("div");
    div.id = id;
    div.innerHTML = data;
    document.body.appendChild(div);
    document
      .getElementById(id)
      .getElementsByTagName("form")[0]
      .submit();
  }
}
export default Pay;
