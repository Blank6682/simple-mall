<template>
    <div class="shop">
        <!-- 头部搜索框 -->
        <div class="header">
            <div class="header-back" @click="handleBackClick">
                <span class="header-back-icon iconfont">&#xe677;</span>
            </div>
            <div class="header-search">
                <span class="header-search-icon iconfont">&#xe60c;</span>
                <input type="search" placeholder="请输入商品名称搜索" />
            </div>
        </div>
        <div class="shop-info">
            <ShopInfo :item="item" :hideBorder="true" />
        </div>
        <!-- 主体内容区 -->
        <div class="container">
            <!-- 侧边导航 -->
            <div class="sidebar">
                <div class="sidebar-item">全部商品</div>
                <div class="sidebar-item">秒杀</div>
                <div class="sidebar-item">新鲜水果</div>
                <div class="sidebar-item">休闲食品</div>
                <div class="sidebar-item">时令蔬菜</div>
                <div class="sidebar-item">肉蛋家禽</div>
            </div>
            <!-- 商品列表-->
            <div class="product">
                <div
                    class="product-item"
                    v-for="item in shopList"
                    :key="item.id"
                >
                    <img class="product-item-img" :src="item.imgUrl" />
                    <div class="product-item-details">
                        <div class="product-item-details-name">
                            {{ item.name }}
                        </div>
                        <div class="product-item-details-sales">
                            月售{{ item.sales }}
                        </div>
                        <div class="product-item-details-price">
                            <div class="product-item-details-price-now">
                                <span>￥</span>{{ item.price }}
                            </div>
                            <div class="product-item-details-price-origin">
                                ￥{{ item.originPrice }}
                            </div>
                        </div>
                    </div>
                    <div class="product-item-count">
                        <div
                            class="product-item-count-mius iconfont"
                            v-if="item.count"
                            @click="() => item.count--"
                        >
                            &#xe60b;
                        </div>
                        <span
                            v-if="item.count"
                            class="product-item-count-number"
                            >{{ item.count }}</span
                        >
                        <div
                            class="product-item-count-plus iconfont"
                            @click="() => item.count++"
                        >
                            &#xe61e;
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 底部结算 -->
        <div class="check">
            <div class="check-cart">
                <span class="check-cart-icon iconfont">&#xe605;</span>
                <div class="check-cart-count" v-if="totalPrice">1</div>
            </div>
            <div class="check-total" v-if="totalPrice">
                总计：
                <span class="check-total-price"> ￥{{ totalPrice }} </span>
            </div>
            <div class="check-total" v-else>购物车是空的</div>
            <div class="check-btn">去结算</div>
        </div>
        <!-- 购物车详情弹出 -->
        <div class="cart-popup">
            <div class="cart-header">
                <input type="checkbox" />全选
                <div class="cart-header-del">清空购物车</div>
            </div>
            <div class="cart-list"></div>
        </div>
        <Toast v-if="isShow" :message="toastMessage"></Toast>
    </div>
</template>

<script>
import { reactive, toRefs, } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo.vue'
import Toast, { useToastEffect } from '../../components/Toast'

//处理获取商店信息逻辑
const uesShopInfoEffter = (showToast) => {
    // route可以获取路由中的数据
    const route = useRoute();
    const data = reactive({ item: {} })
    const getShopInfo = async () => {
        const result = await get(`/api/shop/${route.params.id}`)//通过route获取id
        if (result?.errno === 0 && result.data) {
            data.item = result.data
        } else {
            showToast(result.message)
        }
    }
    const { item } = toRefs(data)
    return { item, getShopInfo }
}

//返回主页逻辑
const useBackRouterEffter = () => {
    const router = useRouter();
    const handleBackClick = () => {
        router.push({ name: 'Home' })
    }
    return { handleBackClick }
}
export default {
    components: { ShopInfo, Toast },
    setup () {
        const shopList = reactive([{
            id: 1,
            name: "番茄250g/份",
            sales: 10,
            price: 33.6,
            originPrice: 33.6,
            count: 1,
            imgUrl: "http://www.dell-lee.com/imgs/vue3/超市.png"
        }, {
            id: 2,
            name: "番茄250g/份",
            sales: 10,
            price: 33.6,
            originPrice: 33.6,
            count: 0,
            imgUrl: "http://www.dell-lee.com/imgs/vue3/超市.png"
        }, {
            id: 32,
            name: "番茄250g/份",
            sales: 10,
            price: 33.6,
            originPrice: 33.6,
            count: 0,
            imgUrl: "http://www.dell-lee.com/imgs/vue3/超市.png"
        },
        ])
        const totalPrice = shopList.reduce(function (total, item) {
            return total + item.price * item.count;
        }, 0)

        const { isShow, toastMessage, showToast } = useToastEffect();
        const { handleBackClick } = useBackRouterEffter();
        const { item, getShopInfo } = uesShopInfoEffter(showToast);
        getShopInfo()
        return {
            item, toastMessage, isShow,
            handleBackClick, shopList, totalPrice
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriablles.scss";
//头部样式
.header {
    margin: 16px 18px;
    display: flex;
    &-back {
        margin-right: 16px;
        &-icon {
            font-size: 22px;
        }
    }
    &-search {
        display: flex;
        align-items: center;
        width: 310px;
        height: 32px;
        border-radius: 16px;
        background: $search-bgColor;
        &-icon {
            font-size: 16px;
            padding: 8px 12px 8px 16px;
            text-align: center;
        }
        input {
            width: 100%;
            height: 32px;
            border-radius: 16px;
            font-size: 14px;
            outline: none;
            border: 0;
            background: $search-bgColor;
        }
    }
}
//商家信息
.shop-info {
    margin: 0 18px;
}
.container {
    display: flex;
}
//左侧导航栏
.sidebar {
    background: $search-bgColor;
    border-radius: 2px;
    border-radius: 2px;
    width: 76px;
    height: 100vh;
    margin-top: 16px;
    &-item {
        width: 76px;
        height: 50px;
        font-size: 14px;
        color: $content-fontcolor;
        text-align: center;
        line-height: 50px;
    }
    &-item:nth-child(1) {
        background: #fff;
    }
}
//商品信息
.product {
    margin: 0 18px 0 16px;
    width: 100%;
    &-item {
        position: relative;
        display: flex;
        align-items: center;
        padding-bottom: 18px;
        font-size: 14px;
        border-bottom: 1px solid #f1f1f1;
        margin: 12px 0;
        &-img {
            width: 68px;
            height: 68px;
            margin-right: 16px;
        }
        &-details {
            color: $content-fontcolor;
            &-name {
                font-weight: 550;
            }
            &-sales {
                font-size: 12px;
                margin: 6px 0;
            }
            &-price-now {
                display: inline-block;
                margin-right: 6px;
                color: #e93b3b;
                font-weight: bold;
                line-height: 14px;
                span {
                    font-size: 10px;
                }
            }
            &-price-origin {
                display: inline-block;
                color: #999999;
                font-size: 10px;
                line-height: 20px;
            }
        }
        &-count {
            position: absolute;
            display: flex;
            bottom: 18px;
            right: 0;
            &-mius,
            &-plus {
                width: 20px;
                height: 20px;
                font-size: 14px;
                text-align: center;
                border-radius: 50%;
            }
            &-mius {
                box-sizing: border-box;
                color: #666666;
                border: 1.8px solid #666666;
            }
            &-plus {
                line-height: 20px;
                background-color: #0091ff;
                color: #fff;
            }
            &-number {
                margin: 0 10px;
                color: $content-fontcolor;
            }
        }
    }
}
//底部结算
.check {
    position: fixed;
    display: flex;
    bottom: 0;
    width: 100%;
    height: 49px;
    text-align: center;
    background: #fff;
    box-shadow: 0 -1px 1px 0 #f1f1f1;
    &-cart {
        position: relative;
        width: 20px;
        height: 20px;
        margin: 12px 24px;
        &-icon {
            color: #0091ff;
            font-size: 20px;
        }
        &-count {
            position: absolute;
            top: -5px;
            right: -10px;
            font-size: 8px;
            line-height: 8px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            color: #fff;
            background: #e93b3b;
        }
    }
    &-total {
        margin-left: 16px;
        line-height: 49px;
        font-size: 12px;
        color: $content-fontcolor;
        &-price {
            font-weight: 550;
            font-size: 18px;
            color: #e93b3b;
        }
    }
    &-btn {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 98px;
        font-size: 14px;
        line-height: 49px;
        color: #fff;
        background: #4fb0f9;
    }
}
</style>