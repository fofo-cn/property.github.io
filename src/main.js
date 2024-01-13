import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Element Plus
// import 'element-plus/theme-chalk/index.css'  // 引入 ElementPlus 组件样式
// // 图标和组件需要分开引入
// import ElementPlus from 'element-plus';   // 引入 ElementPlus 组件
import Vant from "vant"
import 'vant/lib/index.css';
const app = createApp(App)

app.use(store);
app.use(router);
app.mount('#app');
app.use(Vant);



