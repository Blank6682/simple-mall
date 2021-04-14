import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Index.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/login',
        name: 'Login',
        //异步路由加载
        component: () => import(/* webpackChunkName: "login" */ '../views/login/Login.vue'),
        //进入到这个路由之前会执行
        beforeEnter: (to, from, next) => {
            //已登录则跳转到主页
            const { isLogin } = localStorage;
            isLogin ? next({ name: 'Home' }) : next();
        }
    },
    {
        path: "/register",
        name: "Register",
        component: () => import(/* webpackChunkName: "register" */'../views/register/Register.vue'),
    },
    {
        path: "/shop/:id",
        name: "Shop",
        component: () => import(/* webpackChunkName: "shop" */'../views/shop/Shop.vue'),

    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 路由守卫检测登录状态
//beforeEach()路由每次切换时执行
router.beforeEach((to, from, next) => {
    const { isLogin } = localStorage;
    (isLogin || to.name === "Login" || to.name === "Register") ? next() : next({ name: 'Login' });
})
export default router
