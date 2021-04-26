<template>
  <van-overlay
    class-name="overlay-loading"
    :custom-style="{ background: bColor }"
    :show="show"
    @click="show = false"
  >
    <div class="wrapper flex-col align-center justify-center" @click.stop>
      <van-loading size="1.2rem" v-if="loadingType === type.def" />
      <img v-else :src="imgSrc" @error="getDefault" />
    </div>
  </van-overlay>
</template>

<script>
import defaultImg from "@/assets/img/icon-loading.gif";

export default {
  props: {
    isShow: {
      type: Boolean,
      default: () => {
        return false;
      }
    },
    bColor: {
      type: String,
      default: () => {
        return "#fff";
      }
    },
    loadingType: {
      type: String,
      default: () => {
        return "other"; // default
      }
    },
    newImg: {
      // 例: require("@/assets/starImg/xxx.png")
      type: String,
      default: () => {
        return "";
      }
    }
  },
  data() {
    return {
      show: this.isShow,
      type: {
        def: "default"
      },
      imgSrc: this.newImg
    };
  },
  watch: {
    isShow() {
      this.show = this.isShow;
    }
  },
  methods: {
    getDefault() {
      this.imgSrc = defaultImg;
    }
  }
};
</script>

<style lang="less" scoped>
.overlay-loading {
  z-index: 2000;
  .wrapper {
    height: 100%;
    img,
    .img {
      width: 160px;
      height: auto;
      background-size: 100% 100%;
      position: absolute;
      left: 0;
      right: 0;
      top: 41%;
      margin: auto;
    }
  }
}
</style>
