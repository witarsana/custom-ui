import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard2 from '../views/Dashboard2.vue'
import Chart1 from '../views/Chart1.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/dashboard/dashboard-2',
    name: 'dashboard2',
    component: Dashboard2
  },
  {
    path: '/dashboard/chart-1',
    name: 'chart1',
    component: Chart1
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
