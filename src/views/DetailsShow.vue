<template>
  <div class="details-container">
    <div class="tabs-wrap flex">
      <div @click="clickHandle('1')" :class="value === '1' && 'active'">
        <van-icon size="30" name="coupon" />
        <p>权证信息</p>
      </div>
      <div @click="clickHandle('2')" :class="value === '2' && 'active'">
        <van-icon size="30" name="award" />
        <p>电子权证</p>
      </div>
      <div @click="clickHandle('3')" :class="value === '3' && 'active'">
        <van-icon size="30" name="photo" />
        <p>电子附图</p>
      </div>
    </div>
    <div class="pb60" v-if="value === '1'">
      <img width="100%" src="../assets/不动产登记信息查询记录1.png" alt="" />
      <img width="100%" src="../assets/不动产登记信息查询记录2.png" alt="" />
    </div>
    <div v-if="value === '2'">
      <img width="100%" src="../assets/电子权证原图.png" alt="" />
    </div>
    <div v-if="value === '3'">
        <img width="100%" src="../assets/电子附图.png" alt="" />
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const router = useRoute();
    const {
      query: { show },
    } = router;

    let value = ref();
    if (show === "show") {
      value.value = "1";
    } else if (show === "download") {
      value.value = "2";
    } else {
      value.value = "3";
    }
    const clickHandle = (type) => {
      value.value = type;
    };
    return { value, clickHandle };
  },
};
</script>
<style lang='scss' scoped>
.details-container {
  .tabs-wrap {
    position: fixed;
    bottom: 0;
    width: 100%;
    .active {
      background: #f5f5f5;
      color: #1e90ff;
      .van-icon {
        color: #1e90ff;
      }
    }
    div {
      background: #fff;
      padding: 10px;
      flex: 1;
      text-align: center;
      //
      .van-icon {
        color: #778899;
        margin-bottom: 10px;
      }
    }
  }
  .pb60 {
    margin-bottom: 60px;
  }
}
</style>