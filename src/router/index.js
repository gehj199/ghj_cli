import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const routes = [{
    path: '/',
    name: '',
    component: () =>
        import ('@/pages/helloworld'),
    meta: {
        keepAlive: false,
        title: 'hello'
    }
}, {
    path: '/:catchAll(.*)',
    name: '*',
    component: () =>
        import ('@/pages/404')
}]

const router = createRouter({
    //  history: createWebHistory(),
    base: '/project/',
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from) => {
    if (to.meta.title) {
        document.title = to.meta.title
    } else {
        document.title = "权益卡" //没有就默认
    }
    if (to.path == '/activate' && from.path.toLowerCase() != 'openFile') {
        console.log(1);
    }
})

router.beforeEach((to, from, next) => {
    // chrome
    document.body.scrollTop = 0
        // firefox
    document.documentElement.scrollTop = 0
        // safari
    window.pageYOffset = 0
    next()
})



export default router;