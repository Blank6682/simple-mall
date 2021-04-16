<template>
    <div class="shopcart">
        <!-- 商品列表-->
        <div class="product">
            <div class="product-header">
                <div class="product-header-checked">
                    <input type="checkbox" />全选
                </div>
                <div class="product-header-Empty">清空购物车</div>
            </div>
            <template v-for="item in productList" :key="item.id">
                <div class="product-item" v-if="item.count">
                    <input type="checkbox" />
                    <img class="product-item-img" :src="item.imgUrl" />
                    <div class="product-details">
                        <h3 class="product-details-name">{{ item.name }}</h3>
                        <div class="product-price">
                            <p class="product-price-now">
                                <span>&yen;</span>{{ item.price }}
                            </p>
                            <span class="product-price-old">
                                &yen;{{ item.oldPrice }}
                            </span>
                        </div>
                    </div>
                    <div class="product-count">
                        <span
                            class="product-count-mius iconfont"
                            v-if="item.count"
                            @click="
                                changeShopCartItemInfo(
                                    shopId,
                                    item._id,
                                    item,
                                    -1
                                )
                            "
                        >
                            &#xe60b;
                        </span>
                        <span class="product-count-number">
                            {{ item.count }}
                        </span>
                        <span
                            class="product-count-plus iconfont"
                            @click="
                                changeShopCartItemInfo(
                                    shopId,
                                    item._id,
                                    item,
                                    1
                                )
                            "
                        >
                            &#xe61e;
                        </span>
                    </div>
                </div>
            </template>
        </div>
        <div class="check">
            <div class="check-cart">
                <span class="check-cart-icon iconfont">&#xe605;</span>
                <div class="check-cart-count" v-if="total">{{ total }}</div>
            </div>
            <div class="check-total" v-if="total">
                总计：
                <span class="check-total-price"> ￥{{ price }} </span>
            </div>
            <div class="check-total" v-else>购物车是空的</div>
            <div class="check-btn">去结算</div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useShopCartEffect } from './ShopCartEffect'

//获取购物车信息逻辑
const useShopCartInfoEffect = (shopId) => {
    const store = useStore()
    const shopCartList = store.state.shopCartList

    //商品总数
    const total = computed(() => {
        const productList = shopCartList[shopId]
        let count = 0
        if (productList) {
            for (let i in productList) {
                const product = productList[i]
                count += product.count;
            }
        }
        return count
    })
    //总价
    const price = computed(() => {
        const productList = shopCartList[shopId]
        let price = 0
        if (productList) {
            for (let i in productList) {
                const product = productList[i]
                price += (product.count * product.price);
            }
        }
        //取一位小数点处理
        return price.toFixed((1));
    })
    //商品列表
    const productList = computed(() => {
        const productList = shopCartList[shopId] || []
        return productList
    })
    return { total, price, productList }
}
export default {
    name: "ShopCart",
    setup () {
        const route = useRoute()
        const shopId = route.params.id;
        const { total, price, productList } = useShopCartInfoEffect(shopId);
        const { changeShopCartItemInfo } = useShopCartEffect()

        return {
            total, price, productList,
            changeShopCartItemInfo
        }
    },
}
</script>

<style lang="scss" scoped>
@import "../../style/viriablles.scss";
// .shopcart {
//     position: fixed;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     right: 0;
//     background: rgba(0, 0, 0, 0.5);
// }
.check {
    position: absolute;
    display: flex;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 49px;
    line-height: 49px;
    background: #fff;
    box-shadow: 0 -1px 1px 0 #f1f1f1;
    &-cart {
        position: relative;
        margin: 0 24px;
        &-icon {
            color: #0091ff;
            font-size: 20px;
        }
        &-count {
            position: absolute;
            top: 2px;
            right: -10px;
            font-size: 8px;
            line-height: 8px;
            min-width: 10px;
            height: 10px;
            text-align: center;
            border-radius: 8px;
            color: #fff;
            background: #e93b3b;
            transform-origin: left;
        }
    }
    &-total {
        flex: 1;
        margin-left: 16px;
        font-size: 12px;
        color: $content-fontcolor;
        &-price {
            font-weight: 550;
            font-size: 18px;
            color: #e93b3b;
        }
    }
    &-btn {
        text-align: center;
        width: 98px;
        font-size: 14px;
        line-height: 49px;
        color: #fff;
        background: #4fb0f9;
    }
}
.product {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin-bottom: 49px;
    overflow-y: scroll;
    width: 100%;
    background: #fff;
    &-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 18px;
        margin-bottom: 16px;
        font-size: 14px;
        line-height: 20px;
        color: $content-fontcolor;
        border-bottom: 1px solid #f1f1f1;
        input[type="checkbox"] {
            margin-right: 8px;
        }
    }
    &-item {
        position: relative;
        display: flex;
        align-items: center;
        margin: 0 18px 16px;
        &-img {
            width: 46px;
            height: 46px;
            margin: 0 16px;
        }
    }
    &-details {
        color: $content-fontcolor;
        &-name {
            font-weight: 550;
            font-size: 14px;
            margin: 0;
        }
    }
    &-price {
        margin-top: 6px;
        &-now {
            display: inline-block;
            color: #e93b3b;
            font-weight: bold;
            font-size: 14px;
            line-height: 14px;
            span {
                font-size: 10px;
            }
        }
        &-old {
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
</style>