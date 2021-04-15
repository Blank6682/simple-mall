<template>
    <div class="check">
        <div class="check-cart">
            <span class="check-cart-icon iconfont">&#xe605;</span>
            <div class="check-cart-count" v-if="1">1</div>
        </div>
        <div class="check-total" v-if="1">
            总计：
            <span class="check-total-price"> ￥{{ 1 }} </span>
        </div>
        <div class="check-total" v-else>购物车是空的</div>
        <div class="check-btn">去结算</div>
    </div>
</template>

<script>
import { toRefs } from 'vue'
import { useStore } from 'vuex'

export default {
    setup () {
        const store = useStore()
        const { shopCartList } = toRefs(store.state)
        console.log(shopCartList)
        return { shopCartList }
    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriablles.scss";
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
            top: 0;
            right: -10px;
            font-size: 8px;
            line-height: 8px;
            width: 10px;
            height: 10px;
            text-align: center;
            border-radius: 50%;
            color: #fff;
            background: #e93b3b;
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
</style>