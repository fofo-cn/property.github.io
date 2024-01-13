<template>
  <div class="custom-info-container">
    <div class="custom-info">
      <div class="city-info">
        <div>所在地区：</div>
        <div>杭州市 <van-icon name="exchange" /></div>
      </div>

      <van-field
        v-model="value"
        label="坐落"
        placeholder="请输入坐落，信息越完整，匹配越准确"
        input-align="right"
      />

      <div class="certificate-type-wrap">
        <div class="certificate-type">证书类型</div>
        <div class="certificate-choose">
          <van-radio-group v-model="checked">
            <van-radio name="1">不动产权证号</van-radio>
            <van-radio name="2">旧证书号</van-radio>
          </van-radio-group>
        </div>
      </div>

      <div class="finaly-info">
        <div class="bg title">不动产权证号</div>
        <div class="bg street">
          浙（<van-icon name="arrow-down" />）<span class="city-or-xian"
            >XX市/县</span
          >
        </div>
        <div class="bg footer">
          不动产权第 <input type="text" placeholder="请输入" />
          <van-icon size="28" name="scan" /> 号
        </div>
      </div>
      <div class="button"><van-icon name="search"></van-icon>查询</div>
    </div>
    <div class="no-info">暂无数据</div>
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
    let value = ref("");
    let checked = ref("1");
    return { value, checked };
  },
};
</script>
<style lang="scss" scoped>
.custom-info-container {
  background: #f1f1f1;
  height: calc(100vh - 56px);
  text-align: center;
  .footer-notice {
    position: fixed;
    bottom: 20px;
    text-align: center;
    width: 100%;
  }
  .custom-info {
    background: #fff;
    .city-info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      //   color: #1a71dd;
    }
    ::v-deep .van-cell {
      padding: 5px;
      .van-field__label {
        padding: 5px;
        padding-left: 10px;
        width: 50px;
        background-color: #f1f1f1;
        border-radius: 5px 0 0 5px;
        margin-right: 0;
      }
      .van-field__value {
        padding: 5px;
        background-color: #f1f1f1;
        padding-right: 10px;
        border-radius: 0 5px 5px 0;
      }
    }
    .certificate-type-wrap {
      padding: 5px;
      display: flex;
      align-items: center;
      // justify-content: center;
      .certificate-type {
        padding: 5px;
        padding-left: 10px;
        width: 60px;
        background-color: #f1f1f1;
        border-radius: 5px 0 0 5px;
      }
      .certificate-choose {
        padding: 5px;
        flex: 1;
        background-color: #f1f1f1;
        padding-right: 10px;
        padding-left: 20px;
        border-radius: 0 5px 5px 0;
        .van-radio-group {
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
      }
    }
    .finaly-info {
      border: 5px;
      padding: 5px;
      text-align: left;
      .bg {
        padding: 5px 10px 10px 10px;
        background: #f1f1f1;
      }
      .title {
        color: #999;
      }
      .street {
        padding-left: 30px;
        .van-icon {
          padding-left: 40px;
        }
        .city-or-xian {
          color: #999;
        }
      }
      .footer {
        padding-left: 35px;
        input {
          width: 100px;
          border: 0;
          background: #f1f1f1;
          margin-left: 20px;
        }
        .van-icon {
          color: #1a71dd;
          margin-right: 20px;
        }
      }
    }
    .button {
      color: #1a71dd;
      font-size: 16px;
      margin-top: 10px;
      .van-icon {
        margin-right: 5px;
      }
    }
  }
  .no-info {
    color: #999;
    margin-top: 30px;
  }
}
</style>