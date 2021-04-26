import Vue from "vue";

//localStorage
export const storage = function(key, value) {
  if (value === void 0) {
    let lsVal = localStorage.getItem(key);
    if (lsVal && lsVal.indexOf("autostringify-") === 0) {
      return JSON.parse(lsVal.split("autostringify-")[1]);
    } else {
      return lsVal;
    }
  } else {
    if (typeof value === "object" || Array.isArray(value)) {
      value = "autostringify-" + JSON.stringify(value);
    }
    return localStorage.setItem(key, value);
  }
};

let bus = new Vue();
//监听事件
export const on = function(eventName, eventHandle) {
  if (eventName && typeof eventHandle === "function")
    return bus.$on(eventName, eventHandle);
};
//触发事件
export const emit = function(eventName, msg) {
  return bus.$emit(eventName, msg);
};
//解绑事件
export const off = function(eventName, msg) {
  return bus.$off(eventName, msg);
};

// 存储当前历史记录点,实现控制手机物理返回键的按钮事件
export const pushHistory = () => {
  let state = { title: "", url: "" };
  window.history.pushState(state, state.title, state.url);
};

// import AMap from "AMap"; // 引入高德地图
// // 获取位置信息
// export const aMapLocations = () => {
//   return new Promise(resolve => {
//     AMap.plugin("AMap.Geolocation", () => {
//       var geolocation = new AMap.Geolocation({
//         // 是否使用高精度定位，默认：true
//         enableHighAccuracy: true,
//         // 设置定位超时时间，默认：无穷大
//         timeout: 10000,
//         // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
//         buttonOffset: new AMap.Pixel(10, 20),
//         //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
//         zoomToAccuracy: true,
//         //  定位按钮的排放位置,  RB表示右下
//         buttonPosition: "RB",
//         useNative: true
//       });
//       geolocation.getCurrentPosition();
//       AMap.event.addListener(geolocation, "complete", success =>
//         resolve(success)
//       );
//       AMap.event.addListener(geolocation, "error", error => resolve(error));
//     });
//   });
// };

// 获取url参数url截取参数（返回obj）
export const parseQueryString = (url = window.location.href) => {
  var reg_url = /^[^?]+\?([\w\W]+)$/,
    reg_para = /([^&=]+)=([\w\W]*?)(&|$|#)/g,
    arr_url = reg_url.exec(url),
    ret = {};
  if (arr_url && arr_url[1]) {
    var str_para = arr_url[1],
      result;
    while ((result = reg_para.exec(str_para)) != null) {
      ret[result[1]] = result[2];
    }
  }
  return ret;
};

// 倒计时计算
export const calcCountDown = (nowDate, endDate) => {
  if (nowDate.indexOf("-") > 0) {
    nowDate = nowDate.replace(/-/g, "/");
  }
  if (endDate.indexOf("-") > 0) {
    endDate = endDate.replace(/-/g, "/");
  }
  nowDate = new Date(nowDate);
  endDate = new Date(endDate);
  return endDate.getTime() - nowDate.getTime();
};

export const wxUrlEncode = url => {
  url = (url + "").toString();
  return encodeURIComponent(url)
    .replace(/!/g, "%21")
    .replace(/'/g, "%27")
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29")
    .replace(/\*/g, "%2A")
    .replace(/%20/g, "+");
};

//微信公众号支付
export const wxpay = (params, callback) => {
  WeixinJSBridge.invoke(
    "getBrandWCPayRequest",
    {
      appId: params.appId,
      timeStamp: params.timeStamp,
      nonceStr: params.nonceStr,
      package: params.package,
      signType: params.signType,
      paySign: params.paySign
    },
    function(res) {
      callback(res);
    }
  );
};

// 判断是否是微信内浏览器
export const is_weixin = () => {
  var ua = navigator.userAgent.toLowerCase();
  // ios的ua中无miniProgram，但都有MicroMessenger（表示是微信浏览器）
  return ua.match(/MicroMessenger/i) == "micromessenger";
};

//将blob转换为file
export const blobToFile = (theBlob, fileName) => {
  theBlob.lastModifiedDate = new Date();
  theBlob.name = fileName;
  return theBlob;
};

export const formatDate = (date, fmt) => {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      );
    }
  }
  return fmt;
};

export const padLeftZero = str => {
  return ("00" + str).substr(str.length);
};

export const dataURLtoBlob = dataurl => {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], {
    type: mime
  });
};
