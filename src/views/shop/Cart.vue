<template>
    <div class="shopcart">
        <div class="warper" v-if="isShow" @click="showShopCart()"></div>
        <div class="product" v-if="isShow">
            <div class="product-header">
                <div class="product-header-checked">
                    <span
                        class="product-header-icon iconfont"
                        v-html="
                            calculations.isCheckedAll ? '&#xe77b;' : '&#xe670;'
                        "
                        @click="
                            changeCartProductsChecked(
                                shopId,
                                calculations.isCheckedAll
                            )
                        "
                    ></span>
                    全选
                </div>
                <div
                    class="product-header-Empty"
                    @click="clearCartProducts(shopId)"
                >
                    清空购物车
                </div>
            </div>
            <!-- 商品列表-->
            <template v-for="item in productList" :key="item.id">
                <div class="product-item" v-if="item.count">
                    <div
                        class="product-item-checked iconfont"
                        v-html="item.checked ? '&#xe77b;' : '&#xe670;'"
                        @click="changeCartItemChecked(shopId, item._id)"
                    ></div>
                    <img class="product-item-img" :src="item.imgUrl" />
                    <div class="product-details">
                        <h3 class="product-details-name">
                            {{ item.name }}
                        </h3>
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
                            @click="
                                changeCartItemInfo(shopId, item._id, item, -1)
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
                                changeCartItemInfo(shopId, item._id, item, 1)
                            "
                        >
                            &#xe61e;
                        </span>
                    </div>
                </div>
            </template>
        </div>

        <div class="check">
            <div class="check-cart" @click="showShopCart()">
                <span class="check-cart-icon iconfont">&#xe605;</span>
                <div class="check-cart-count" v-if="calculations.count">
                    {{ calculations.count }}
                </div>
            </div>
            <div class="check-total" v-if="!calculations.cartStatus">
                总计：
                <span class="check-total-price">
                    ￥{{ calculations.price }}
                </span>
            </div>
            <div class="check-total" v-if="calculations.cartStatus">
                购物车是空的
            </div>
            <div
                class="check-btn"
                @click="handleSettlement(calculations.count)"
            >
                去结算
            </div>
        </div>
        <Toast v-if="isShowToast" :message="toastMessage" />
    </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { useCartEffect } from '../../effects/CartEffect'
import Toast, { useToastEffect } from '../../components/Toast.vue'

//获取购物车信息逻辑
const useShopCartInfoEffect = () => {
    const store = useStore()
    //商品选中
    const changeCartItemChecked = (shopId, productId) => {
        //提交changeCartItemChecked事件 可以同步修改store的数据
        store.commit("changeCartItemChecked", { shopId, productId })
    }

    //购物车全选   
    const changeCartProductsChecked = (shopId, isCheckedAll) => {
        isCheckedAll = !isCheckedAll
        store.commit("changeCartProductsChecked", { shopId, isCheckedAll })
    }

    //清空购物车
    const clearCartProducts = (shopId) => {
        store.commit("clearCartProducts", { shopId })
    }
    return {
        changeCartItemChecked, clearCartProducts, changeCartProductsChecked
    }
}

//处理去结算逻辑
const useSettlementEffect = (showToast, shopId) => {
    const router = useRouter()
    const handleSettlement = (order) => {

        if (!order) {
            showToast("你还没选择宝贝哦！")
        } else {
            router.push({ path: `/orderConfirmation/${shopId}` })
        }
    }
    return { handleSettlement }
}

export default {
    components: { Toast },
    name: "ShopCart",
    setup () {
        const route = useRoute()
        const shopId = route.params.id;
        const isShow = ref(false)
        const showShopCart = () => { isShow.value = !isShow.value }

        const { isShowToast, toastMessage, showToast } = useToastEffect()
        const { changeCartItemChecked, clearCartProducts, changeCartProductsChecked, } = useShopCartInfoEffect(shopId);
        const { changeCartItemInfo, calculations, productList } = useCartEffect(shopId)
        const { handleSettlement } = useSettlementEffect(showToast, shopId)

        return {
            productList, shopId, changeCartItemInfo, calculations,
            changeCartItemChecked, clearCartProducts, changeCartProductsChecked,
            showShopCart, isShow, handleSettlement, toastMessage, isShowToast
        }
    },
}
</script>

<style lang="scss" scoped>
@import "../../style/viriablles.scss";
.warper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba($color: #000000, $alpha: 0.5);
}
.check {
    position: absolute;
    display: flex;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 49rem;
    line-height: 49rem;
    background: $bgColor;
    box-shadow: 0 -1rem 1rem 0 $content-bgColor;
    &-cart {
        position: relative;
        margin: 0 24rem;
        &-icon {
            color: $btn-bgColor;
            font-size: 20rem;
        }
        &-count {
            position: absolute;
            top: 2rem;
            right: -10rem;
            font-size: 8rem;
            line-height: 8rem;
            min-width: 10rem;
            height: 10rem;
            text-align: center;
            border-radius: 8rem;
            color: $bgColor;
            background: $hightlight-fontColor;
            transform-origin: left;
        }
    }
    &-total {
        flex: 1;
        margin-left: 16rem;
        font-size: 12rem;
        color: $content-fontColor;
        &-price {
            font-weight: 550;
            font-size: 18rem;
            color: $hightlight-fontColor;
        }
    }
    &-btn {
        text-align: center;
        width: 98rem;
        background: $btn-bgColor;
        font-size: 14rem;
        line-height: 49rem;
        color: $bgColor;
    }
}
.product {
    overflow-y: scroll;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin-bottom: 49rem;
    width: 100%;
    background: $bgColor;
    &-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16rem 18rem;
        margin-bottom: 16rem;
        font-size: 14rem;
        line-height: 20rem;
        color: $content-fontColor;
        border-bottom: 1rem solid $content-bgColor;
        vertical-align: top;
        &-icon {
            font-size: 20rem;
            color: $btn-bgColor;
            margin-right: 8rem;
        }
    }
    &-item {
        position: relative;
        display: flex;
        align-items: center;
        margin: 0 18rem 16rem;
        &-checked {
            font-size: 20rem;
            color: $btn-bgColor;
        }
        &-img {
            width: 46rem;
            height: 46rem;
            margin: 0 16rem;
        }
    }
    &-details {
        color: $content-fontColor;
        &-name {
            font-weight: 550;
            font-size: 14rem;
            margin: 0;
        }
    }
    &-price {
        margin-top: 6rem;
        &-now {
            display: inline-block;
            color: $hightlight-fontColor;
            font-weight: bold;
            font-size: 14rem;
            line-height: 14rem;
            span {
                font-size: 10rem;
            }
        }
        &-old {
            display: inline-block;
            text-decoration: line-through;
            color: $light-fontColor;
            font-size: 10rem;
            line-height: 20rem;
        }
    }
    &-count {
        position: absolute;
        bottom: 0;
        right: 0;
        margin-bottom: 18rem;
        &-mius,
        &-plus {
            display: inline-block;
            font-size: 14rem;
            text-align: center;
            border-radius: 50%;
        }
        &-mius {
            box-sizing: border-box;
            width: 18rem;
            height: 18rem;
            color: $medium-fontColor;
            border: 1rem solid $medium-fontColor;
        }
        &-plus {
            width: 20rem;
            height: 20rem;
            line-height: 20rem;
            background-color: $btn-bgColor;
            color: $bgColor;
        }
        &-number {
            margin: 0 10rem;
            color: $content-fontColor;
        }
    }
}
</style>
