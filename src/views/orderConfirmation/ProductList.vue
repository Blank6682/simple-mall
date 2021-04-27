<template>
    <div class="content">
        <div class="inventory">
            <h3 class="inventory-title">{{ shopName }}</h3>
            <div class="inventory-list">
                <template v-for="item in productList" :key="item._id">
                    <div class="inventory-item" v-if="item.count">
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
                共计8件/4kg
                <span class="inventory-weight-icon iconfont">&#xe919;</span>
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default {
    name: "ProductList",
    setup () {
        const store = useStore()
        const route = useRoute()
        const shopId = route.params.id
        const { shopName, productList } = store.state.cartList[shopId]
        return { shopName, productList }
    }
}
</script>

<style lang="scss" scoped>
.inventory {
    position: absolute;
    left: 18px;
    right: 18px;
    padding: 16px;
    background-color: #fff;
    box-shadow: 0px 1px 3px 1px rgba($color: #000000, $alpha: 0.1);
    &-title {
        margin-bottom: 16px;
        font-size: 16px;
        color: #333;
    }
    &-item {
        position: relative;
        display: flex;
        margin-bottom: 16px;
        font-size: 14px;
        color: #333;
        &-image {
            width: 46px;
            height: 46px;
            margin-right: 16px;
        }
        &-title {
            font-size: 16px;
        }
        &-count {
            position: absolute;
            left: 62px;
            bottom: 0;
            color: red;
        }
        &-total {
            position: absolute;
            bottom: 0;
            right: 16px;
        }
        &-yen {
            font-size: 10px;
        }
    }
    &-weight {
        height: 28px;
        font-size: 14px;
        font-weight: 200;
        text-align: center;
        line-height: 28px;
        color: #999;
        background-color: #f5f5f5;
        &-icon {
            margin-left: 8px;
        }
    }
}
</style>