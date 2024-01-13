import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import PropertyQuery from '../views/PropertyQuery.vue'
import ElectronicLicense from "../views/ElectronicLicense.vue"
import ProcessingProgress from "../views/ProcessingProgress.vue"
import CustomInfo from "../views/CustomInfo.vue"
import ElectronicLicenseList from "../views/ElectronicLicenseList.vue"
import DetailsShow from "../views/DetailsShow.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: "不动产智治",
      keepAlive: true
    }
  },
  {
    path: '/property_query',
    name: 'property_query',
    component: PropertyQuery,
    meta: {
      title: "权属查询",
      keepAlive: true
    }
  },
  {
    path: '/electronic_license',
    name: 'electronic_license',
    component: ElectronicLicense,
    meta: {
      title: "电子证照",
      keepAlive: true
    }
  },
  {
    path: '/processing_progress',
    name: 'processing_progress',
    component: ProcessingProgress,
    meta: {
      title: "办理进度",
      keepAlive: true
    }
  },
  {
    path: '/custom_info',
    name: 'custom_info',
    component: CustomInfo,
    meta: {
      title: "客户信息",
      keepAlive: true
    }
  },
  {
    path: '/electronic_license_list',
    name: 'electronic_license_list',
    component: ElectronicLicenseList,
    meta: {
      title: "不动产-电子证照查询列表",
      keepAlive: true
    }
  },
  {
    path: '/details_show',
    name: 'details_show',
    component: DetailsShow,
    meta: {
      title: "不动产-电子证照查询详情",
      keepAlive: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
