import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/

const routes = [
  {path: '/home', component: () => import('@/views/home/index')},
  {path: '/', component: () => import('@/views/login/index')},
  {path: '/404', component: () => import('@/views/404')},
  {path: '*', redirect: '/404'}
]

//异步挂载的路由
//动态需要根据权限加载的路由表
export const asyncRouterMap = []

const router = new VueRouter({
  routes
})

export default router
