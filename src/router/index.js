import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'
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

//实例化vue的时候只挂载constantRouter
export const constantRouterMap = [
  {path: '/login', component: () => import('@/views/login/index'), hidden: true},
  {path: '/404', component: () => import('@/views/404'), hidden: true},
  {
    path: '',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/views/home/index'),
      meta: {title: '首页', icon: 'home'}
    }]
  }
]

//异步挂载的路由
//动态需要根据权限加载的路由表
export const asyncRouterMap = [
  {
    path:'/localLogOperation',
    component:Layout,
    redirect:'/localLogOperation/one',
    name:'localLogOperation',
    meta:{title:'本地日志操作',icon:'local-upload'},
    children: [{
      path: 'one',
      name: 'one',
      component: () => import('@/views/local/localone'),
      meta: {title: '上传', icon: 'upload'}
    },
      {
        path: 'two',
        name: 'two',
        component: () => import('@/views/local/localtwo'),
        meta: {title: '分析', icon: 'analysis'}
      }
      ]
  },
    {
        path:'/historyAnalysis',
        component:Layout,
        redirect:'/localLogOperation/one',
        name:'historyAnalysis',
        meta:{title:'历史记录',icon:'history'},
        children: [{
            path: 'anotherone',
            name: 'anotherone',
            component: () => import('@/views/historyAnalysis/anotherone'),
            meta: {title: '历史记录', icon: 'history'}
        },]
    },
    {
        path:'/systemConfig',
        component:Layout,
        redirect:'/systemConfig/van',
        name:'systemConfig',
        meta:{title:'系统设置',icon:'history'},
        children: [{
            path: 'systemConfig',
            name: 'systemConfig',
            component: () => import('@/views/systemConfig/van'),
            meta: {title: '系统设置', icon: 'system-config'}
        },]
    },
  {path: '*', redirect: '/404', hidden: true}
]

export default new Router({
  // mode: 'history', //#访问路径调整
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})
