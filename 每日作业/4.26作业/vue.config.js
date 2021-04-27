const address = require("address");
const path = require("path");
const webpack = require("webpack");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const vConsolePlugin = require("vconsole-webpack-plugin");

const productionGzipExtensions = ["js", "css"];
function resolve(dir) {
  return path.join(__dirname, dir);
}
const assetsCDN = {
  // webpack build externals
  externals: {
    "vue-router": "VueRouter",
    axios: "axios"
  },
  js: [
    "//cdn.jsdelivr.net/npm/vue-router@3.1.3/dist/vue-router.min.js",
    "//cdn.jsdelivr.net/npm/axios@0.19.0/dist/axios.min.js"
  ]
};

let envType = process.env.NODE_ENV !== "production";
let pluginsDev = [
  new vConsolePlugin({
    filter: [],
    enable: envType
  })
];

// vue.config.js
const vueConfig = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@i": path.resolve(__dirname, "./src/assets"),
        "@v": path.resolve(__dirname, "./src/views"),
        "@c": path.resolve(__dirname, "./src/components")
      }
    },
    // webpack plugins
    plugins: [
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new CompressionWebpackPlugin({
        algorithm: "gzip",
        test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
        threshold: 10240,
        minRatio: 0.8
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 5,
        minChunkSize: 100
      }),
      ...pluginsDev
    ],
    externals: assetsCDN.externals
  },
  devServer: {
    disableHostCheck: true,
    useLocalIp: true,
    host: address.ip(),
    port: 8075 // 端口号配置
  },
  chainWebpack: config => {
    config.resolve.alias.set("@$", resolve("src"));
    config.plugin("html").tap(args => {
      args[0].title = "首页";
      args[0].cdn = assetsCDN;
      return args;
    });
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // less vars，customize ant design theme
          "primary-color": "#ff7e00",
          "link-color": "#ff7e00",
          "border-radius-base": "4px"
        },
        // DO NOT REMOVE THIS LINE
        javascriptEnabled: true
      }
    }
  },
  publicPath: "./", // process.env.VUE_APP_BASE
  outputDir: process.env.VUE_APP_OUTDIR,
  // disable source map in production
  productionSourceMap: false,
  lintOnSave: true,
  // babel-loader no-ignore node_modules/*
  transpileDependencies: []
};
// preview.pro.loacg.com only do not use in your production;

module.exports = vueConfig;
