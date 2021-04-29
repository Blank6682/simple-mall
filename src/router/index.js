import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Index.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
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

    },
    {
        path: "/orderConfirmation/:id",
        name: "OrderConfirmation",
        component: () => import(/* webpackChunkName: "shopConfirmation" */'../views/orderConfirmation/Index.vue'),

    },
    {
        path: "/SetAddress/:id",
        name: "SetAddress",
        component: () => import(/* webpackChunkName: "SetAddress" */'../views/setAddress/setAddress.vue'),

    },
    {
        path: "/MyAddressList",
        name: "MyAddressList",
        component: () => import(/* webpackChunkName: "MyAddressList" */'../views/myAddressList/MyAddressList.vue'),

    },
    {
        path: "/OrderList",
        name: "OrderList",
        component: () => import(/* webpackChunkName: "OrderList" */'../views/orderList/OrderList.vue'),
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
