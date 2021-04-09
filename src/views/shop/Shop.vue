<template>
    <div class="shop">
        <div class="hearder">
            <div class="hearder-back">
                <span class="hearder-back-icon iconfont"></span>
            </div>
            <div class="hander-search">
                <span class="hander-search-icon iconfont">&#xe60c;</span>
                <input type="search" />
            </div>
        </div>
        <div class="shop-info">
            <ShopInfo :item="item" :hideBorder="true" />
        </div>
    </div>
</template>

<script>
import { reactive, } from 'vue'
import ShopInfo from '../../components/ShopInfo.vue'
export default {
    components: { ShopInfo },
    setup () {
        const item = reactive({
            expressLimit: 0,
            expressPrice: 5,
            imgUrl: "http://www.dell-lee.com/imgs/vue3/near.png",
            name: "沃尔玛",
            sales: 10000,
            slogan: "VIP尊享满89元减4元运费券",
            _id: "1"
        })
        return { item }
    }
}
</script>

<style lang="scss" scoped>
.shop-info {
    margin: 16px 18px;
}
</style>