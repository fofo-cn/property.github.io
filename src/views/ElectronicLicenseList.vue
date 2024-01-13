<template>
  <div class="list-container">
    <div class="select-options-wrap">
      <div class="map-choose">
        <van-icon name="description-o" />
        <p class="city-name">业务号</p>
        <van-icon name="arrow-down" />
      </div>
      <div class="search-option-input">
        <van-field
          v-model="value"
          placeholder="请输入关键词"
          left-icon="search"
        />
      </div>
    </div>

    <van-tabs v-model:active="active">
      <van-tab title="有效">
        <div class="list-wrap">
          <div class="card">
            <div class="flex">
              <van-tag color="#b0c4de" text-color="#000080">业务号</van-tag>
              <p>Z330101-20240104-0008863</p>
            </div>
            <div>临安区锦北街道 ****** 01室</div>
            <div class="flex">
              <div>浙（2024）****** 17号</div>
              <div class="diver">|</div>
              <div
                @click="
                  $router.push({ name: 'details_show', query: { show: 'show' } })
                "
              >
                <van-icon name="description" />证书
              </div>
              <div class="diver">|</div>
              <div
                @click="
                  $router.push({ name: 'details_show', query: { show: 'download' } })
                "
              >
                <van-icon name="down" />证书下载
              </div>
            </div>
            <div>下载次数：0次</div>
          </div>
          <div class="no-more">没有更多了</div>
        </div>
      </van-tab>
      <van-tab title="无效"><div class="no-more">没有更多了</div></van-tab>
      <van-tab title="单元清单"><div class="no-more">没有更多了</div></van-tab>
    </van-tabs>
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
    const active = ref(0);
    return { active };
  },
};
</script>
<style lang='scss' scoped>
.list-container {
  background: #f1f1f1;
  height: calc(100vh - 156px);
  .select-options-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    padding: 0 10px;
    background: #fff;
    .map-choose {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      .city-name {
        padding: 0 5px;
      }
    }
    .search-option-input {
      width: 75%;

      ::v-deep .van-cell {
        padding: 0 5px;
        background-color: #f1f1f1;
      }
    }
  }

  .list-wrap {
    padding: 10px;
    .card {
      padding: 10px;
      background: #fff;
      div {
        margin-bottom: 5px;
      }
      .flex {
        p {
          padding-left: 20px !important;
          font-weight: 700;
        }
      }
      .diver {
        margin: 0 10px;
      }
      .van-icon {
        color: #1a71dd;
      }
    }
  }
  .no-more {
    margin-top: 20px;
    text-align: center;
  }
}
</style>