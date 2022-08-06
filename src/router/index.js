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
        component: () => import('../views/login/Login.vue'),
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
        component: () => import('../views/register/Register.vue'),
    },
    {
        path: "/shop/:id",
        name: "Shop",
        component: () => import('../views/shop/Shop.vue'),

    },
    {
        path: "/orderConfirmation/:id",
        name: "OrderConfirmation",
        component: () => import('../views/orderConfirmation/Index.vue'),

    },
    {
        path: "/SetAddress/:id",
        name: "SetAddress",
        component: () => import('../views/setAddress/SetAddress.vue'),

    },
    {
        path: "/MyAddressList",
        name: "MyAddressList",
        component: () => import('../views/myAddressList/MyAddressList.vue'),

    },
    {
        path: "/CartList",
        name: "CartList",
        component: () => import('../views/cartList/CartList.vue'),
    },
    {
        path: "/OrderList",
        name: "OrderList",
        component: () => import('../views/orderList/OrderList.vue'),
    },
    {
        path: "/PersonalInfo",
        name: "PersonalInfo",
        component: () => import('../views/personalInfo/Index.vue'),
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
