<template>
    <div class="warper">
        <div class="bottom">
            <div class="bottom-pay">
                实付金额
                <span class="bottom-pay-price"
                    ><b> &yen;{{ Calculation.price }}</b></span
                >
            </div>
            <div class="bottom-confirmation">提交订单</div>
        </div>
        <!-- 弹窗 -->
        <div class="popups" v-if="0">
            <!-- 支付成功提醒 -->
            <div class="popups-tip">
                <p class="popups-pay-close iconfont">&#xe602;</p>
                <p class="popups-pay-yes iconfont">&#xe620;</p>
                <p class="popups-pay-msagess">支付成功，等待配送</p>
            </div>
            <!-- 二次确认订单弹窗 -->
            <div class="popups-pay">
                <h3 class="popups-pay-title">确认要离开收银台？</h3>
                <p class="popups-pay-msagess">请尽快完成支付，否则将被取消</p>
                <div class="popups-pay-btn">
                    <div class="popups-pay-cancel">取消订单</div>
                    <div class="popups-pay-confirm">确认支付</div>
                </div>
            </div>
        </div>
        <!-- 背景遮挡层 -->
        <div class="popups-bg" v-if="0"></div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useCartEffect } from '../../effects/CartEffect'
export default {
    name: "Confirmation",
    setup () {
        const route = useRoute()
        console.log("🚀 ~ file: Confirmation.vue ~ line 43 ~ setup ~ route.parmas", route.params)
        const shopId = route.params.id
        const { Calculation } = useCartEffect(shopId)
        return { Calculation }
    }
}
</script>

<style lang="scss" scoped>
.bottom {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    line-height: 49px;
    font-size: 14px;
    background: #fff;
    &-pay {
        margin-left: 24px;
        color: #333;
        &-price {
            margin-left: 2px;
            font-size: 16px;
            font-weight: 500;
            color: #151515;
        }
    }
    &-confirmation {
        width: 98px;
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
    width: 301px;
    height: 156px;
    text-align: center;
    border-radius: 4px;
    background: #fff;
    z-index: 10;
    &-tip {
        &-close {
            position: absolute;
            right: 0;
            top: 0;
            margin: 12px 12px 0 0;
            z-index: 2;
        }
        &-yes {
            margin-top: 40px;
            font-size: 44px;
        }
        &-msagess {
            font-size: 18px;
            margin-top: 24px;
            color: #333;
        }
    }
    &-pay {
        &-title {
            margin-top: 24px;
            font-size: 18px;
            color: #333;
        }
        &-msagess {
            margin-top: 8px;
            font-size: 14px;
            color: #666;
        }
        &-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 24px 0;
            font-size: 14px;
        }
        &-cancel,
        &-confirm {
            margin: 0 12px;
            width: 80px;
            height: 32px;
            line-height: 32px;
            border-radius: 16px;
            border: 1px solid #4fb0f9;
            box-sizing: content-box;
        }
        &-cancel {
            color: #0091ff;
        }
        &-confirm {
            color: #fff;
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