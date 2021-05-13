<template>
    <div class="wrapper">
        <div class="title">我的全部购物车</div>
        <div class="shops">
            <div
                class="empty"
                v-if="Object.keys(cartListWithProducts).length === 0"
            >
                购物车当前为空
            </div>
            <div
                class="shop"
                v-for="(item, index) in cartListWithProducts"
                :key="index"
            >
                <div class="shop-title">
                    {{ item.shopName }}
                </div>
                <div class="products">
                    <div class="products-list">
                        <template
                            v-for="product in item.productList"
                            :key="product._id"
                        >
                            <div v-if="product.count > 0" class="products-item">
                                <img
                                    class="products-item-img"
                                    :src="product.imgUrl"
                                />
                                <div class="products-item-detail">
                                    <h4 class="products-item-title">
                                        {{ product.name }}
                                    </h4>
                                    <p class="products-item-price">
                                        <span>
                                            <span class="products-item-yen"
                                                >&yen;
                                            </span>
                                            {{ product.price }} x
                                            {{ product.count }}
                                        </span>
                                        <span class="products-item-total">
                                            <span class="products-item-yen"
                                                >&yen;
                                            </span>
                                            {{
                                                (
                                                    product.price *
                                                    product.count
                                                ).toFixed(2)
                                            }}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FooterTapBar :currentIndex="1" />
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import FooterTapBar from '../../components/FooterTapBar.vue'

//购物车列表逻辑
const useCartEffect = () => {
    const store = useStore()
    const cartList = store.state.cartList;

    const cartListWithProducts = computed(() => {
        const newCartList = {};
        for (let shopId in cartList) {
            let total = 0
            const products = cartList[shopId].productList
            for (let productId in products) {
                const product = products[productId]
                total += (product.count || 0)
            }
            if (total > 0) {
                newCartList[shopId] = cartList[shopId]
            }
        }
        return newCartList;
    })

    return { cartListWithProducts }
}

export default {
    components: { FooterTapBar },
    name: 'CartList',
    setup () {
        const { cartListWithProducts } = useCartEffect()
        return { cartListWithProducts }
    }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriablles.scss";
@import "../../style/mixins";
.wrapper {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 49rem;
    right: 0;
    background: $dark-bgColor;
}
.title {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    line-height: 44rem;
    background: $bgColor;
    font-size: 16rem;
    color: $content-fontColor;
    text-align: center;
}
.empty {
    line-height: 44rem;
    color: $light-fontColor;
    font-size: 16rem;
    text-align: center;
}
.shops {
    // overflow-y: scroll;
    position: absolute;
    top: 56rem;
    right: 18rem;
    bottom: 1rem;
    left: 18rem;
    background: $bgColor;
}
.shop {
    &-title {
        padding: 16rem;
        font-size: 16rem;
        color: $content-fontColor;
    }
    &-wrapper {
        // overflow-y: scroll;
        margin: 0 18rem;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 6rem;
        top: 260rem;
    }
}
.products {
    &-list {
        background: $bgColor;
    }
    &-item {
        position: relative;
        display: flex;
        padding: 0 16rem 16rem 16rem;
        &-img {
            width: 46rem;
            height: 46rem;
            margin-right: 16rem;
        }
        &-detail {
            flex: 1;
        }
        &-title {
            margin: 0;
            line-height: 22rem;
            font-size: 14rem;
            color: $content-fontColor;
            @include ellipsis;
        }
        &-price {
            display: flex;
            margin: 6rem 0 0 0;
            line-height: 0.2rem;
            font-size: 14rem;
            color: $hightlight-fontColor;
        }
        &-total {
            flex: 1;
            text-align: right;
            color: $darkColor;
        }
        &-yen {
            font-size: 12rem;
        }
    }
}
</style>