<template>
    <!-- 主体内容区 -->
    <div class="content">
        <!-- 侧边导航 -->
        <div class="sidebar">
            <div
                v-for="item in tabList"
                :class="{
                    'sidebar-item': true,
                    'sidebar-item-active': currentTab === item.tab,
                }"
                :key="item.id"
                @click="() => handleTabClick(item.tab)"
            >
                {{ item.name }}
            </div>
        </div>
        <!-- 商品列表-->
        <div class="product">
            <div class="product-item" v-for="item in goodsList" :key="item.id">
                <img class="product-item-img" :src="item.imgUrl" />
                <div class="product-details">
                    <h3 class="product-details-name">{{ item.name }}</h3>
                    <p class="product-details-sales">月售{{ item.sales }}</p>
                    <div class="product-details-price">
                        <div class="product-details-price-now">
                            <span>￥</span>{{ item.price }}
                        </div>
                        <span class="product-details-price-old">
                            ￥{{ item.oldPrice }}
                        </span>
                    </div>
                </div>
                <div class="product-count">
                    <div
                        class="product-count-mius iconfont"
                        v-if="shopCartList?.[shopId]?.[item._id]?.count"
                        @click="minusItemToShopCart(shopId, item._id, item)"
                    >
                        &#xe60b;
                    </div>
                    <span
                        v-if="shopCartList?.[shopId]?.[item._id]?.count"
                        class="product-count-number"
                    >
                        {{ shopCartList?.[shopId]?.[item._id]?.count }}
                    </span>
                    <div
                        class="product-count-plus iconfont"
                        @click="addItemToShopCart(shopId, item._id, item)"
                    >
                        &#xe61e;
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref, toRefs, watchEffect } from 'vue'
import { get } from '../../utils/request'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

//tab列表
const tabList = [
    { id: 1, name: "全部商品", tab: "all" },
    { id: 2, name: "秒杀", tab: "seckill" },
    { id: 3, name: "新鲜水果", tab: "fruit" },
]

//列表相关逻辑
const useShopListEffter = (currentTab, shopId) => {
    const data = reactive({ goodsList: [] })
    //获取商品列表
    const getGoodsList = async () => {
        const result = await get(`/api/shop/${shopId}/products`, { tab: currentTab.value })
        if (result.errno == 0 && result.data.length) {
            data.goodsList = result.data
        }
    }
    watchEffect(() => getGoodsList())
    const { goodsList } = toRefs(data)
    return { getGoodsList, goodsList }
}

//tab切换逻辑
const useTagEffter = () => {
    const currentTab = ref(tabList[0].tab);
    const handleTabClick = (tab) => {
        currentTab.value = tab
    }
    return { currentTab, handleTabClick }
}

//购物车相关逻辑
const useShopCartEffter = () => {
    const store = useStore()
    const { shopCartList } = toRefs(store.state)

    const addItemToShopCart = (shopId, productId, productInfo) => {
        //提交addItemToShopCart事件 可以同步修改store的数据
        store.commit("addItemToShopCart", { shopId, productId, productInfo })
    }
    const minusItemToShopCart = (shopId, productId) => {
        store.commit("minusItemToShopCart", { shopId, productId })
    }

    return { shopCartList, addItemToShopCart, minusItemToShopCart }
}
export default {
    name: "Content",
    setup () {
        //route获取商店ID
        const route = useRoute()
        const shopId = route.params.id

        //逻辑处理
        const { currentTab, handleTabClick } = useTagEffter();
        const { goodsList } = useShopListEffter(currentTab, shopId);
        const { shopCartList, addItemToShopCart, minusItemToShopCart } = useShopCartEffter()
        return {
            goodsList, tabList, currentTab, handleTabClick,
            shopCartList, addItemToShopCart, minusItemToShopCart, shopId,
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriablles.scss";
.content {
    display: flex;
    //左侧导航栏
    .sidebar {
        border-radius: 2px;
        border-radius: 2px;
        width: 76px;
        height: 464px;
        margin-top: 16px 0 49px 0;
        overflow-y: scroll;
        background: $search-bgColor;
        &-item {
            font-size: 14px;
            color: $content-fontcolor;
            text-align: center;
            line-height: 50px;
            &-active {
                background: #fff;
            }
        }
    }
    //商品信息
    .product {
        flex: 1;
        margin: 0 18px 0 16px;
        overflow-y: scroll;
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
        }
        &-details {
            color: $content-fontcolor;
            &-name {
                font-weight: 550;
                font-size: 14px;
                margin: 0;
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
                font-size: 14px;
                line-height: 14px;
                span {
                    font-size: 10px;
                }
            }
            &-price-old {
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
</style>