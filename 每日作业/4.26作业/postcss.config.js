module.exports = ({ file }) => {
  let isVant = file && file.dirname && file.dirname.indexOf("vant") > -1;
  let rootValue = isVant ? 37.5 : 75; // 判断条件 请自行调整
  return {
    plugins: {
      autoprefixer: {
        overrideBrowserslist: [
          "Android 4.1",
          "iOS 7.1",
          "Chrome > 31",
          "ff > 31",
          "ie >= 8"
        ]
      },
      "postcss-pxtorem": {
        rootValue: rootValue, //结果为：设计稿元素尺寸/75，设计稿宽 750,最终页面会换算成 10rem
        propList: ["*"],
        //https://github.com/youzan/vant/issues/1181#issuecomment-487305533
        //selectorBlackList: ["van-"], //（数组）要忽略的选择器并保留为px。 过滤的类名
        minPixelValue: 2 // （数字）设置要替换的最小像素值 解决 1px 问题 //所有小于设置的样式都不被转换
      }
    }
  };
};
