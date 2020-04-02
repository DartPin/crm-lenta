import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Main from '../components/Main.vue'
import RetailCentres from '../components/RetailCentres.vue'
import RetailCentresVolga from '../components/RetailCentresVolga.vue'
import RetailCentresInfo from '../components/RetailCentresInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  },
  {
    path: '/RetailCentres',
    name: 'RetailCentres',
    component: RetailCentres
  },
  {
    path: '/RetailCentres/Volga',
    name: 'RetailCentresVolga',
    component: RetailCentresVolga
  },
  {
    path: '/RetailCentres/rc:numRC',
    name: 'RetailCentresInfo',
    component: RetailCentresInfo
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
