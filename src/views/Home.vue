<template>
  <div class="home">
    <!-- map -->
    <div class="select-options-wrap">
      <div class="map-choose">
        <van-icon name="location-o" />
        <p class="city-name">杭州市</p>
        <van-icon name="arrow-down" />
      </div>
      <div class="search-option-input">
        <van-field
          v-model="value"
          placeholder="请输入搜索条件"
          left-icon="search"
        />
      </div>
    </div>

    <!-- notice -->
    <van-notice-bar left-icon="volume-o" text="涉密不上网，上网不涉密。" />
    <div class="access-wrap">
      <p class="today">今日访问量 0 次</p>
      <p class="fenge">|</p>
      <p class="history">历史访问量 28186240 次</p>
    </div>

    <!-- 我的不动产 -->
    <div class="title">
      <h2>我的不动产</h2>
      <div class="more">更多 ></div>
    </div>
    <div class="immovable-info-wrap">
      <div class="immovable-info card">
        <img src="../assets/不动产信息.png" alt="" />
      </div>
    </div>
    <div class="if-error">如有异议请点击反馈 》</div>
    <!-- 我要查 -->
    <div class="title">
      <h2>我要查</h2>
      <div class="more">更多 ></div>
    </div>
    <div class="want-search-wrap">
      <div class="card button-wrap" @click="jumpClick('property_query')">
        <div class="icon-wrap"><van-icon size="28" name="friends-o" /></div>
        <div>权属查询</div>
      </div>
      <div class="card button-wrap" @click="jumpClick('electronic_license')">
        <div class="icon-wrap"><van-icon size="28" name="photo-o" /></div>
        <div>电子证照</div>
      </div>
      <div class="card button-wrap" @click="jumpClick('processing_progress')">
        <div class="icon-wrap"><van-icon size="28" name="tosend" /></div>
        <div>办理进度</div>
      </div>
      <div class="card button-wrap" @click="jumpClick('custom_info')">
        <div class="icon-wrap"><van-icon size="28" name="link-o" /></div>
        <div>客户信息</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "HomeView",
  setup() {
    const value = ref("");
    const text = ref("");
    const router = useRouter();
    const jumpClick = (name) => {
      router.push({ name });
    };
    return { value, text, jumpClick };
  },
};
</script>
<style scoped lang="scss">
.home {
  .select-options-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    padding: 0 10px;
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
  .access-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    color: #1a71dd;
    background-color: #ecf5ff;
    .today {
      width: 45%;
    }
    .history {
      width: 50%;
    }
  }
  .title {
    padding: 15px 20px 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .more {
      color: #1a71dd;
    }
  }

  .immovable-info-wrap {
    padding: 0 20px;
    .immovable-info {
      background-color: #1a71dd;
      color: #fff;
      width: 100%;
      img {
        width: 95%;
      }
    }
  }
  .if-error {
    width: 100vw;
    color: #1a71dd;
    margin-top: 10px;
    text-align: center;
  }
  .want-search-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    padding: 0 10px;
    .button-wrap {
      padding: 10px 0 20px 0;
      width: 30%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      .icon-wrap {
        background-color: #1a71dd;
        width: 70%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        color: #f1f1f1;
        margin-bottom: 10px;
        border-radius: 5px;
      }
    }
  }
}
</style>
