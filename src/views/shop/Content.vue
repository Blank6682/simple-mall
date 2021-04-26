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
                        <p class="product-details-price-now">
                            <span>&yen;</span>{{ item.price }}
                        </p>
                        <span class="product-details-price-old">
                            &yen;{{ item.oldPrice }}
                        </span>
                    </div>
                </div>
                <div class="product-count">
                    <span
                        class="product-count-mius iconfont"
                        v-if="
                            shopCartList?.[shopId]?.productList?.[item._id]
                                ?.count
                        "
                        @click="
                            changeCartItemInfo(
                                shopId,
                                item._id,
                                item,
                                -1,
                                shopName
                            )
                        "
                    >
                        &#xe60b;
                    </span>
                    <!-- 显示的是购物车的商品数量 -->
                    <span
                        v-if="
                            shopCartList?.[shopId]?.productList?.[item._id]
                                ?.count
                        "
                        class="product-count-number"
                    >
                        {{
                            shopCartList?.[shopId]?.productList?.[item._id]
                                ?.count
                        }}
                    </span>
                    <span
                        class="product-count-plus iconfont"
                        @click="
                            changeCartItemInfo(
                                shopId,
                                item._id,
                                item,
                                1,
                                shopName
                            )
                        "
                    >
                        &#xe61e;
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref, toRefs, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { get } from '../../utils/request'
import { useShopCartEffect } from './ShopCartEffect'

//tab列表
const tabList = [
    { id: 1, name: "全部商品", tab: "all" },
    { id: 2, name: "秒杀", tab: "seckill" },
    { id: 3, name: "新鲜水果", tab: "fruit" },
]

//列表相关逻辑
const useShopListEffect = (currentTab, shopId) => {
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
    return { goodsList }
}

//tab切换逻辑
const useTagEffect = () => {
    const currentTab = ref(tabList[0].tab);
    const handleTabClick = (tab) => {
        currentTab.value = tab
    }
    return { currentTab, handleTabClick }
}

export default {
    name: "Content",
    props: ["shopName"],
    setup () {
        //route获取商店ID
        const route = useRoute()
        const shopId = route.params.id
        //逻辑处理
        const { currentTab, handleTabClick } = useTagEffect();
        const { goodsList } = useShopListEffect(currentTab, shopId);
        const { changeCartItemInfo, shopCartList } = useShopCartEffect()
        return {
            goodsList, tabList, currentTab, handleTabClick,
            changeCartItemInfo, shopId, shopCartList
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriablles.scss";
.content {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 154px;
    bottom: 49px;
    //左侧导航栏
    .sidebar {
        border-radius: 2px;
        border-radius: 2px;
        width: 76px;
        margin-top: 16px;
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
        margin: 0 10px 0 16px;
        overflow-y: scroll;
        &-item {
            position: relative;
            display: flex;
            align-items: center;
            padding-bottom: 18px;
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
                text-decoration: line-through;
                color: #999999;
                font-size: 10px;
                line-height: 20px;
            }
        }
        &-count {
            position: absolute;
            bottom: 0;
            right: 0;
            margin-bottom: 18px;
            &-mius,
            &-plus {
                display: inline-block;
                font-size: 14px;
                text-align: center;
                border-radius: 50%;
            }
            &-mius {
                box-sizing: border-box;
                width: 18px;
                height: 18px;
                color: #666666;
                border: 1px solid #666666;
            }
            &-plus {
                width: 20px;
                height: 20px;
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