<template>
    <div class="wraper">
        <div class="order">
            <div class="order-title">我的订单</div>
            <div class="order-list">
                <div class="order-list-item"></div>
            </div>
        </div>
        <footer-tap-bar></footer-tap-bar>
    </div>
</template>

<script>
import { get } from '../../utils/request'
import FooterTapBar from '../../components/FooterTapBar.vue'
import { reactive } from 'vue'

const useOrderListEffrct = () => {
    const data = reactive({ list: [] })
    const getNearShopList = async () => {
        const result = await get('/api/order')

    }
    return { getNearShopList }
}
export default {
    name: 'OrderList',
    components: { FooterTapBar },
    setup (props) {
        const { getNearShopList } = useOrderListEffrct();
        getNearShopList();
        return;
    }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriablles.scss";
.warper {
    padding: 0;
    margin: 0;
}
.order {
    &-title {
        text-align: center;
        font-size: 16px;
        line-height: 22px;
        padding: 11px 0;
        color: $content-fontColor;
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