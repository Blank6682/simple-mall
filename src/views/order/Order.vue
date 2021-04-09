<template>
    <div class="wraper">
        <div class="order">
            <div class="order-title">我的订单</div>
            <div class="order-list">
                <div class="order-list-item"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Order'

}
</script>

<style lang="scss" scoped>
@import "../../style/viriablles.scss";
.order {
    &-title {
        text-align: center;
        font-size: 16px;
        line-height: 22px;
        margin: 11px auto;
        color: $content-fontcolor;
        box-shadow: 0px 1px 0px 0px rgba($color: #000000, $alpha: 0.2);
    }
    &-list {
        width: 339px;
        height: 110px;
        margin: 16px 18px;
        padding: 16px;
        box-shadow: 0px 1px 1px 1px rgba($color: #000000, $alpha: 0.2);
    }
}
</style>