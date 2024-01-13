<template>
  <div class="processing-container">
    <div class="search-options">
      <div class="city-option">
        <div>查询范围：</div>
        <div>杭州市 <van-icon name="exchange" /></div>
      </div>
      <div class="city-name">
        杭州市上城区、拱墅区、西湖区、钱塘区、滨江区、萧山区、余杭区、临平区、富阳区、临安区和淳安县、
        桐庐县、建德市
      </div>
    </div>
    <div class="flex-between search-info">
      <div>查档用途</div>
      <div>信息查询 <van-icon name="arrow-down" /></div>
    </div>
    <div class="flex-between search-mortgage">
      <div>查询查封抵押</div>
      <van-radio-group v-model="checked" class="flex-between">
        <van-radio name="1">是</van-radio>
        <van-radio name="2">否</van-radio>
      </van-radio-group>
    </div>
    <h3 class="pl-10">添加家庭成员信息</h3>
    <van-divider />
    <div class="flex-around">
      <van-button plain hairline type="primary">自动获取</van-button>
      <van-button plain hairline type="primary">手动添加</van-button>
    </div>
    <van-checkbox-group
      v-model="checkedbox"
      shape="square"
      style="padding: 10px"
    >
      <van-checkbox name="a"
        >我已阅读并同意<span class="book"
          >《不动产权属信息查询须知》</span
        ></van-checkbox
      >
    </van-checkbox-group>
    <van-button type="primary" style="width: 100%">查 询</van-button>
    <div class="footer">
      本服务由浙江政务服务网、浙江省自然资源厅提供服务咨询热线：杭州市-
      <a href="tel:0571-87008160">0571-87008160</a>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let checked = ref("1");
    let checkedbox = ref("a");
    return { checked, checkedbox };
  },
};
</script>
<style lang="scss" scoped>
.processing-container {
  .search-options {
    padding: 10px;
    background-color: #ecf5ff;
    .city-option {
      display: flex;
      align-items: center;
      justify-content: space-between;
      // color: #1a71dd;
    }
    .city-name {
      background: #109efe;
      color: #fff;
      border-radius: 5px;
      padding: 10px;
      text-align: left;
      margin-top: 10px;
    }
  }
  .search-info {
    padding: 10px;
    color: #109efe;
  }
  .search-mortgage {
    padding: 10px;
    color: #109efe;
  }
  .van-button {
    width: 40%;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .book {
    color: #109efe;
  }
  .footer {
    text-align: center;
    position: fixed;
    bottom: 20px;
  }
}
</style>