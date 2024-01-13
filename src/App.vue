<template>
  <div>
    <van-nav-bar
      :title="$route.meta.title"
      :left-text="$route.meta.title === '不动产智治' ? '' : '返回'"
      right-text="..."
      :left-arrow="$route.meta.title === '不动产智治' ? false : true"
      @click-left="onClickLeft"
      @click-right="onClickRight"
      fixed
      safe-area-inset-top="50"
    >
    </van-nav-bar>
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view />
    </keep-alive>
    <router-view v-else />
  </div>
</template>
<script>
export default {
  name: "App",
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      console.log("左边");
    },
    onClickRight() {
      console.log("右边");
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 46px;
  padding-bottom: 10px;
  font-size: 14px;

  p {
    margin: 0;
    padding: 0;
  }
  .card {
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
  .flex-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .flex-around {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .flex {
    display: flex;
  }
  .pl-10 {
    padding-left: 10px;
  }
  .font-color-blue {
    color: #109efe;
  }
  .footer-notice {
    position: fixed;
    bottom: 20px;
    text-align: center;
    width: 100%;
  }
}
</style>
