import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const demo = () => import('../src/modules/demo.vue')
const myCanvas = () => import('../src/modules/myCanvas.vue')
const infobox = () => import('../src/modules/index.vue')
const routes = [
  {
    path: '/demo',
    name: 'demo',
    component: demo
  },
  {
    path: '/canvas',
    name: 'myCanvas',
    component: myCanvas
  },
  {
    path: '/infobox',
    name: 'infobox',
    component: infobox
  }
]
const router = new Router({
  routes: routes
})

export default router
