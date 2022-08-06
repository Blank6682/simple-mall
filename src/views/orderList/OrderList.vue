<template>
    <div class="wraper">
        <div class="order">
            <div class="title">我的订单</div>
            <div class="order-list">
                <div
                    class="order-list-item"
                    v-for="(item, index) in list"
                    :key="index + item.shopName"
                >
                    <div class="order-title">
                        {{ item.shopName }}
                        <span class="order-title-status">
                            {{ isCanceled ? "已取消" : "已下单" }}
                        </span>
                    </div>
                    <div class="order-content">
                        <template
                            v-for="(innerItem, innerIndex) in item.products"
                            :key="innerIndex + innerItem.product.name"
                        >
                            <img
                                class="order-content-img"
                                :src="innerItem.product.img"
                                v-if="innerIndex <= 4"
                            />
                        </template>
                        <div class="order-content-info">
                            <div class="order-content-price">
                                &yen;{{ item.totalPrice.toFixed(1) }}
                            </div>
                            <div class="order-content-count">
                                共{{ item.totalNumber }}件
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterTapBar :currentIndex="2"></FooterTapBar>
    </div>
</template>

<script>
import { get } from '../../utils/request'
import FooterTapBar from '../../components/FooterTapBar.vue'
import { reactive, toRefs } from 'vue'

const useOrderListEffrct = () => {
    const data = reactive({ list: [] })
    const getNearShopList = async () => {
        const result = await get('/api/order')
        if (result.errno === 0 && result?.data?.length) {
            const orderList = result.data //订单列表

            orderList.forEach((order) => {
                const products = order.products || [] //单个订单中的商品
                let totalNumber = 0
                let totalPrice = 0

                //遍历计算总价和总数
                products.forEach((productItem) => {
                    totalNumber += (productItem?.orderSales || 0)
                    totalPrice += (productItem?.product?.price * productItem?.orderSales || 0)
                })
                
                order.totalNumber = totalNumber
                order.totalPrice = totalPrice
            })

            data.list = result.data
        }
    }
    getNearShopList();
    const { list } = toRefs(data)

    return { list }
}
export default {
    name: 'OrderList',
    components: { FooterTapBar },
    setup () {
        const { list } = useOrderListEffrct()
        return { list }
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
    .title {
        text-align: center;
        font-size: 16rem;
        line-height: 22rem;
        padding: 11rem 0;
        color: $content-fontColor;
        background-color: $bgColor;
    }
    &-list {
        position: absolute;
        top: 60rem;
        left: 0;
        right: 0;
        bottom: 49rem;
        &-item {
            box-shadow: 0 1rem 1rem 1rem rgba($color: #000000, $alpha: 0.2);
            margin: 16rem 18rem;
            padding: 16rem;
        }
    }
    &-title {
        display: flex;
        justify-content: space-between;
        font-size: 16rem;
        color: $content-fontColor;
        &-status {
            font-size: 14rem;
            color: $light-fontColor;
        }
    }
    &-content {
        position: relative;
        display: flex;
        margin-top: 16rem;
        &-img {
            margin-right: 12rem;
            width: 40rem;
            height: 40rem;
        }
        &-info {
            position: absolute;
            right: 0;
            bottom: 0;
            text-align: right;
        }
        &-price {
            margin-bottom: 4rem;
            font-size: 14rem;
            color: $hightlight-fontColor;
        }
        &-count {
            font-size: 12rem;
            color: $content-fontColor;
        }
    }
}
</style>
