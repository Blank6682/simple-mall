<template>
    <div class="warper">
        <div class="bottom">
            <div class="bottom-pay">
                实付金额
                <span class="bottom-pay-price"
                    ><b> &yen;{{ calculations.price }}</b></span
                >
            </div>
            <div class="bottom-confirmation" @click="handleShowConfirmChange()">
                提交订单
            </div>
        </div>
        <!-- 弹窗 -->
        <div class="popups" v-if="showConfirm">
            <!-- 支付成功提醒 -->
            <div class="popups-msg" v-if="0">
                <p class="popups-msg-close iconfont">&#xe602;</p>
                <p class="popups-msg-yes iconfont">&#xe620;</p>
                <p class="popups-msg-msagess">支付成功，等待配送</p>
            </div>
            <!-- 二次确认订单弹窗 -->
            <div class="popups-pay" v-if="showConfirm">
                <h3 class="popups-pay-title">确认要离开收银台？</h3>
                <p class="popups-pay-msagess">请尽快完成支付，否则将被取消</p>
                <div class="popups-pay-btn">
                    <div
                        class="popups-pay-cancel"
                        @click="handleConfirmOrder(true)"
                    >
                        取消订单
                    </div>
                    <div
                        class="popups-pay-confirm"
                        @click="handleConfirmOrder(false)"
                    >
                        确认支付
                    </div>
                </div>
            </div>
        </div>
        <!-- 背景遮挡层 -->
        <div
            class="popups-bg"
            v-if="showConfirm"
            @click="handleShowConfirmChange()"
        ></div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { post } from '../../utils/request.js'
import { useCartEffect } from '../../effects/CartEffect'
import { useStore } from 'vuex'

//下单相关逻辑
const useMakeOrderEffect = (shopId, shopName, productList, address) => {
    const router = useRouter()
    const store = useStore()
    //处理提交订单
    const handleConfirmOrder = async (isCanceled) => {
        const products = []
        //获取选中的商品列表
        for (let i in productList.value) {
            const product = productList.value[i]
            if (product.checked) {
                products.push({ id: product._id, num: product.count })
            }
        }
        try {
            const result = await post("/api/order", {
                addressId: address,
                shopId,
                shopName: shopName.value,
                isCanceled,
                products
            })
            if (result?.errno == 0) {
                store.commit("clearCartProducts", { shopId })
                router.push({ name: "OrderList" })
            }
        } catch (e) {
            console.log(e)
        }
    }
    return { handleConfirmOrder }
}

//弹遮层显示相关逻辑
const useShowMaskEffect = () => {
    const showConfirm = ref(false);
    const handleShowConfirmChange = () => {
        showConfirm.value = !showConfirm.value
    }
    return { showConfirm, handleShowConfirmChange }
}

export default {
    name: "Confirmation",
    setup () {
        const route = useRoute()
        const shopId = route.params.id
        const address = ref(1)
        const { shopName, productList, calculations } = useCartEffect(shopId)
        const { handleConfirmOrder } = useMakeOrderEffect(shopId, shopName, productList, address)
        const { showConfirm, handleShowConfirmChange } = useShowMaskEffect()

        return {
            shopName, calculations,
            showConfirm, handleShowConfirmChange, handleConfirmOrder
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriablles.scss";
.bottom {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    line-height: 49rem;
    font-size: 14rem;
    background: #fff;
    &-pay {
        margin-left: 24rem;
        color: $content-fontColor;
        &-price {
            margin-left: 2rem;
            font-size: 16rem;
            font-weight: 500;
            color: #151515;
        }
    }
    &-confirmation {
        width: 98rem;
        text-align: center;
        color: #fff;
        background-color: #4fb0f9;
    }
}
.popups {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 301rem;
    height: 156rem;
    text-align: center;
    border-radius: 4rem;
    background: #fff;
    z-index: 10;
    &-msg {
        &-close {
            position: absolute;
            right: 0;
            top: 0;
            margin: 12rem 12rem 0 0;
            z-index: 2;
        }
        &-yes {
            margin-top: 40rem;
            font-size: 40rem;
        }
        &-msagess {
            font-size: 18rem;
            margin-top: 24rem;
            color: $content-fontColor;
        }
    }
    &-pay {
        &-title {
            margin-top: 24rem;
            font-size: 18rem;
            color: $content-fontColor;
        }
        &-msagess {
            margin-top: 8rem;
            font-size: 14rem;
            color: #666;
        }
        &-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 24rem 0;
            font-size: 14rem;
        }
        &-cancel,
        &-confirm {
            margin: 0 12rem;
            width: 80rem;
            height: 32rem;
            line-height: 32rem;
            border-radius: 16rem;
            border: 1rem solid #4fb0f9;
            box-sizing: content-box;
        }
        &-cancel {
            color: $btn-bgColor;
        }
        &-confirm {
            color: $bgColor;
            background: #4fb0f9;
        }
    }
}
.popups-bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 2;
}
</style>