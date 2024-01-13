<template>
  <div class="electronic-container">
    <div class="flex-between search-wrap">
      <div>查询范围：</div>
      <div>杭州市 <van-icon name="exchange" /></div>
    </div>
    <h3>申请信息</h3>
    <van-divider />
    <div class="person-info">
      <div v-for="item in arrList" :key="item.label" class="flex-between">
        <van-field
          v-model="item.value"
          :label="item.label"
          input-align="right"
        />
        <van-divider />
      </div>
      <div class="choose-wrap">
        <div class="title">身份类型</div>
        <van-radio-group v-model="checked" class="choose-radio">
          <van-radio name="1">领证人</van-radio>
          <van-radio name="2">权利人</van-radio>
        </van-radio-group>
      </div>
      <div class="choose-wrap">
        <div class="title">证书类型</div>
        <van-radio-group v-model="checked2" class="choose-radio">
          <van-radio name="1">电子证书</van-radio>
          <van-radio name="2">电子证明</van-radio>
        </van-radio-group>
      </div>
    </div>
    <van-button
      type="primary"
      style="width: 100%"
      @click="$router.push({ name: 'electronic_license_list' })"
      >查 询</van-button
    >
    <div class="footer-notice">
      服务咨询热线：杭州市-
      <a href="tel:0571-87008160">0571-87008160</a>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    let arrList = ref([
      { label: "姓名", value: "李*卉" },
      { label: "证件号码", value: "352***********52X" },
    ]);
    let checked = ref("1");
    let checked2 = ref("1");
    return { arrList, checked, checked2 };
  },
};
</script>
<style lang='scss' scoped>
.electronic-container {
  .search-wrap {
    padding: 10px;
    background-color: #f1f1f1;
  }
  h3 {
    margin-left: 10px;
  }
  .choose-wrap {
    padding: 15px;
    .title {
      margin-bottom: 10px;
    }
    .choose-radio {
      display: flex;
      .van-radio {
        margin-right: 20px;
      }
    }
  }
  .footer-notice {
    position: fixed;
    bottom: 20px;
    text-align: center;
    width: 100%;
  }
}
</style>