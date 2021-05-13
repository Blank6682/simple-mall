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
                <div class="shop__title">
                    {{ item.shopName }}
                </div>
                <div class="products">
                    <div class="products__list">
                        <template
                            v-for="product in item.productList"
                            :key="product._id"
                        >
                            <div
                                v-if="product.count > 0"
                                class="products__item"
                            >
                                <img
                                    class="products__item__img"
                                    :src="product.imgUrl"
                                />
                                <div class="products__item__detail">
                                    <h4 class="products__item__title">
                                        {{ product.name }}
                                    </h4>
                                    <p class="products__item__price">
                                        <span>
                                            <span class="products__item__yen"
                                                >&yen;
                                            </span>
                                            {{ product.price }} x
                                            {{ product.count }}
                                        </span>
                                        <span class="products__item__total">
                                            <span class="products__item__yen"
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
import FooterTapBar from '../../components/FooterTapBar.vue'


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
    bottom: 0.5rem;
    right: 0;
    background: $dark-bgColor;
}
.title {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    line-height: 0.44rem;
    background: $bgColor;
    font-size: 0.16rem;
    color: $content-bgColor;
    text-align: center;
}
.empty {
    line-height: 0.44rem;
    color: $light-fontColor;
    font-size: 0.16rem;
    text-align: center;
}
.shops {
    overflow-y: scroll;
    position: absolute;
    top: 0.6rem;
    right: 0.18rem;
    bottom: 0.1rem;
    left: 0.18rem;
    background: $bgColor;
}
.shop {
    &__title {
        padding: 0.16rem;
        font-size: 0.16rem;
        color: $content-bgColor;
    }
    &__wrapper {
        overflow-y: scroll;
        margin: 0 0.18rem;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0.6rem;
        top: 2.6rem;
    }
}
.products {
    &__list {
        background: $bgColor;
    }
    &__item {
        position: relative;
        display: flex;
        padding: 0 0.16rem 0.16rem 0.16rem;
        &__img {
            width: 0.46rem;
            height: 0.46rem;
            margin-right: 0.16rem;
        }
        &__detail {
            flex: 1;
        }
        &__title {
            margin: 0;
            line-height: 0.2rem;
            font-size: 0.14rem;
            color: $content-bgColor;
            @include ellipsis;
        }
        &__price {
            display: flex;
            margin: 0.06rem 0 0 0;
            line-height: 0.2rem;
            font-size: 0.14rem;
            color: $hightlight-fontColor;
        }
        &__total {
            flex: 1;
            text-align: right;
            color: $darkColor;
        }
        &__yen {
            font-size: 0.12rem;
        }
    }
}
</style>