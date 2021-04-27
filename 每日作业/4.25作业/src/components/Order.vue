<template>
  <div class="home">
    <ul>
      <li v-for="(item, index) in orderList" :key="index">
        <div>
          <span>订单 {{ index + 1 }}</span>
        </div>
        <div>
          类型：<span>{{ item.comboTypeName }}</span>
        </div>
        <div v-show="item.comboTypeName === '套餐'">
          套餐详情：
          <!-- <span v-for="key in item.productDescription" :key="key.productName"
            >({{ key.productName }}*{{ key.amount }})</span
          > -->
          <span
            v-for="(key, index) in item.productDescription"
            :key="key.productName"
            >{{ key.productName }} *{{ key.amount }}
            <span v-show="index != item.productDescription.length - 1">+</span>
          </span>
        </div>
        <button class="payBtn" @click="getDetails(item)">查看详情</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      orderList: [
        {
          orderNo: "TS210423115539507",
          orderStatus: "REFUNDED",
          comboType: "SINGLE_PRODUCT",
          comboTypeName: "单品",
          productDescription: [
            {
              amount: 3,
              productName: "爆米花爆米花",
            },
          ],
        },
        {
          orderNo: "TS210423115128923",
          orderStatus: "FAIL",
          comboType: "COMBO_PRODUCT",
          comboTypeName: "套餐",
          productDescription: [
            {
              amount: 1,
              productName: "球爆爆米花46oz",
            },
            {
              amount: 2,
              productName: "可口可乐16oz",
            },
          ],
        },
      ],
    };
  },
  methods: {
    getDetails(item) {
      if (item.comboTypeName === "套餐") {
        this.$router.push({
          path: "/aPage",
          query: {
            orderNo: item.orderNo,
            orderStatus: item.orderStatus,
          },
        });
      } else {
        this.$router.push({
          path: "/bPage/" + item.orderNo,
        });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  width: 400px;
}

.home ul {
  margin-top: 100px;
}

.home ul li {
  list-style: none;
  width: 100%;
  height: 100px;
  border: 1px solid #000;
  box-sizing: border-box;
  margin-top: 5px;
  position: relative;
}

li .tab-name {
  display: inline-block;
  position: absolute;
  left: 10px;
  top: 5px;
}

li .tab-btn {
  position: absolute;
  right: 5px;
  top: 70px;
}

li .orderStatus {
  float: right;
  margin-right: 5px;
}

li .payBtn {
  float: right;
  margin-right: 5px;
}
</style>
