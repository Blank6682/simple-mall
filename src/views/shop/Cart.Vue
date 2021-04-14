<template>
    <!-- 购物车 -->
    <div class="cart">
        <div class="cart-header">
            <input type="checkbox" />全选
            <div class="cart-header-del">清空购物车</div>
        </div>
        <div class="cart-list">
                </template>
            </ul>
        </div>
        <!-- 底部结算 -->
        <div class="check">
            <div class="check-cart">
                <span class="check-cart-icon iconfont">&#xe605;</span>
                <div class="check-cart-tag" v-if="totalPrice">1</div>
            </div>
            <div class="check-total" v-if="totalPrice">
                总计：
                <span class="check-total-price"> ￥{{ totalPrice }} </span>
            </div>
            <div class="check-total" v-else>购物车是空的</div>
            <div class="check-btn">去结算</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.check {
    position: fixed;
    display: flex;
    bottom: 0;
    width: 100%;
    height: 49px;
    text-align: center;
    background: #fff;
    box-shadow: 0 -1px 1px 0 #f1f1f1;
    &-cart {
        position: relative;
        width: 20px;
        height: 20px;
        margin: 12px 24px;
        &-icon {
            color: #0091ff;
            font-size: 20px;
        }
        &-tag {
            position: absolute;
            top: -5px;
            right: -10px;
            font-size: 8px;
            line-height: 8px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            color: #fff;
            background: #e93b3b;
        }
    }
    &-total {
        margin-left: 16px;
        line-height: 49px;
        font-size: 12px;
        color: $content-fontcolor;
        &-price {
            font-weight: 550;
            font-size: 18px;
            color: #e93b3b;
        }
    }
    &-btn {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 98px;
        font-size: 14px;
        line-height: 49px;
        color: #fff;
        background: #4fb0f9;
    }
}
</style>