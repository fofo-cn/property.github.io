<template>
  <div class="processing-container">
    <div class="flex-between search-wrap">
      <div>查询范围：</div>
      <div>杭州市 <van-icon name="exchange" /></div>
    </div>
    <img width="100%" src="../assets/办理进度.jpeg" alt="" />

    <div class="button-wrap">
      <div class="flex-between number">
        <div class="start">业务编号</div>
        <div class="end-number">业务编号</div>
      </div>
      <van-divider />
      <van-button type="primary" style="width: 100%">查 询</van-button>
    </div>
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
    let value = ref();
    return { value };
  },
};
</script>
<style lang='scss' scoped>
.processing-container {
  background: #f1f1f1;
  height: calc(100vh - 56px);
  .footer-notice {
    position: fixed;
    bottom: 20px;
    text-align: center;
    width: 100%;
  }
  .search-wrap {
    padding: 10px;
  }
  .button-wrap {
    background: #fff;
    .number {
      padding: 10px;
      .end-number {
        color: #999;
      }
    }
  }
}
</style>