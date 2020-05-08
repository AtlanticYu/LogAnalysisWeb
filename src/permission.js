import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // 验权

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
    NProgress.start()
    //已经有登录过的token
    if (getToken()) {
        if (to.path === '/login') {
            next({ path: '/' })
            NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
        } else {
            // 判断当前用户是否已拉取完user_info信息
            if (store.getters.roles.length === 0) {
                console.log("store.getters.roles.length --------- 0");
                store.dispatch('GetInfo').then(res => { // 拉取用户信息
                    let menus=res.data.menus;
                    console.log(menus);
                    let username=res.data.username;
                    console.log(username);
                    store.dispatch('GenerateRoutes', { menus,username }).then(() => { // 生成可访问的路由表
                        router.addRoutes(store.getters.addRouters); // 动态添加可访问路由表
                        next({ ...to, replace: true })
                    })
                }).catch((err) => {
                    store.dispatch('FedLogOut').then(() => {
                        Message.error(err || 'Verification failed, please login again')
                        next({ path: '/' })
                    })
                })
            } else {
                next()//当有用户权限的时候，说明所有可访问路由已生成 如访问没权限的页面会自动进入404页面
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) { //// 在免登录白名单，直接进入
            next()
        } else {
            next('/login');  // 否则全部重定向到登录页
            NProgress.done()
        }
    }
})

router.afterEach(() => {
    NProgress.done() // 结束Progress
})
