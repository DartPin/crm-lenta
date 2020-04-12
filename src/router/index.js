import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Main from '../components/Main.vue'
import RetailCentres from '../components/RetailCentres.vue'
import RetailCentresVolga from '../components/RetailCentresVolga.vue'
import RetailCentresInfo from '../components/RetailCentresInfo.vue'
import RetailCentresInfoEdit from '../components/RetailCentresInfoEdit.vue'
import RetailCentresNew from '../components/RetailCentresNew.vue'
import DealNew from '../components/DealNew.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name: 'Main',
    component: Main
  },
  {
    path: '/',
    name: 'RetailCentres',
    component: RetailCentres
  },
  {
    path: '/RetailCentres/reg/:region',
    name: 'RetailCentresVolga',
    component: RetailCentresVolga
  },
  {
    path: '/RetailCentres/rc:numRC',
    name: 'RetailCentresInfo',
    component: RetailCentresInfo
  },
  {
    path: '/RetailCentres/editrc:numRC',
    name: 'RetailCentresInfoEdit',
    component: RetailCentresInfoEdit
  },
  {
    path: '/RetailCentres/newRC',
    name: 'RetailCentresNew',
    component: RetailCentresNew
  },
  {
    path: '/Deals/new',
    name: 'DealNew',
    component: DealNew
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
