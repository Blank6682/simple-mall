<template>
    <div class="content">
        <div class="inventory">
            <h3 class="inventory-title">{{ shopName }}</h3>
            <div class="inventory-list">
                <template v-for="(item, index) in productList" :key="item._id">
                    <div
                        class="inventory-item"
                        v-if="
                            item.count &&
                            item.checked &&
                            (index < 3 || showAllProduct)
                        "
                    >
                        <img class="inventory-item-image" :src="item.imgUrl" />
                        <h4 class="inventory-item-title">{{ item.name }}</h4>

                        <div class="inventory-item-count">
                            <span class="inventory-item-yen">&yen;</span>
                            {{ item.price }}×{{ item.count }}
                        </div>

                        <div class="inventory-item-total">
                            <span class="inventory-item-yen"> &yen;</span
                            >{{ (item.price * item.count).toFixed(1) }}
                        </div>
                    </div>
                </template>
            </div>
            <div class="inventory-weight iconfont">
                共计{{ calculations.count }}件/{{ calculations.count * 0.25 }}kg
                <span
                    class="inventory-weight-icon iconfont"
                    @click="handleShowAllProduct()"
                    v-html="showAllProduct ? '&#xe604;' : '&#xe919;'"
                ></span>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useCartEffect } from '../../effects/CartEffect'
export default {
    name: "ProductList",
    setup () {
        const route = useRoute()
        const shopId = route.params.id
        const showAllProduct = ref(false)
        const { shopName, productList, calculations } = useCartEffect(shopId)

        console.log("🚀 ~ file: ProductList.vue ~ line 53 ~ setup ~ shopName", showAllProduct.value)
        const handleShowAllProduct = () => {
            showAllProduct.value = !showAllProduct.value
        }


        return { shopName, productList, showAllProduct, handleShowAllProduct, calculations }
    }
}
</script>

<style lang="scss" scoped>
@import "../../style/mixins.scss";
@import "../../style/viriablles.scss";
.inventory {
    position: relative;
    padding: 16rem;
    margin: 0 18rem 65rem 18rem;
    background-color: $bgColor;
    box-shadow: 0rem 1rem 3rem 1rem rgba($color: #000000, $alpha: 0.1);

    &-title {
        margin-bottom: 16rem;
        font-size: 16rem;
        color: $content-fontColor;
    }
    &-list {
        overflow-y: scroll;
    }
    &-item {
        position: relative;
        display: flex;
        margin-bottom: 16rem;
        font-size: 14rem;
        color: $content-fontColor;
        &-image {
            width: 46rem;
            height: 46rem;
            margin-right: 16rem;
        }
        &-title {
            font-size: 16rem;
            @include ellipsis;
        }
        &-count {
            position: absolute;
            left: 62rem;
            bottom: 0;
            color: $hightlight-fontColor;
        }
        &-total {
            position: absolute;
            bottom: 0;
            right: 16rem;
        }
        &-yen {
            font-size: 10rem;
        }
    }
    &-weight {
        height: 28rem;
        font-size: 14rem;
        font-weight: 200;
        text-align: center;
        line-height: 28rem;
        color: #999;
        background-color: $search-bgColor;
        &-icon {
            margin-left: 8rem;
        }
    }
}
</style>