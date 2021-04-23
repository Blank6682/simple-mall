<template>
    <div class="warper">
        <div class="bg">
            <div class="top">
                <div class="top-head">
                    <span class="top-head-back iconfont">&#xe677;</span>
                    确认订单
                </div>
                <div class="top-receive">
                    <h3 class="top-receive-title">收获地址</h3>
                    <div class="top-receive-address">
                        北京理工大学国防科技园2号楼10层
                    </div>
                    <div class="top-receive-contact">
                        <span>瑶妹（先生） </span>
                        <span>18911024266</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "OrderConfirmation",

}
</script>

<style lang="scss" scoped>
.bg {
    height: 156.5px;
    background-image: linear-gradient(
        0deg,
        rgba(0, 145, 255, 0) 4%,
        #0091ff 50%
    );
}
.top {
    margin: 0 18px;
    &-head {
        text-align: center;
        line-height: 68.5px;
        color: #ffffff;
        &-back {
            position: absolute;
            left: 18px;
            font-size: 22px;
        }
    }
    &-receive {
        position: absolute;
        width: 307px;
        background: #fff;
        border-radius: 4px;
        margin: 0 auto;
        padding: 16px;
        color: #333;
        box-shadow: 0px 2px 3px rgba($color: #000000, $alpha: 0.1);
        &-title {
            font-size: 16px;
            margin-bottom: 14px;
        }
        &-address {
            font-size: 14px;
            margin-bottom: 6px;
        }
        &-contact {
            font-size: 12px;
            color: #666;
        }
    }
}
</style>
