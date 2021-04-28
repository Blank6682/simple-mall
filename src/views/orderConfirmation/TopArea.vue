<template>
    <div class="bg">
        <div class="top">
            <div class="top-head">
                <span class="top-head-back iconfont" @click="$router.back(-1)"
                    >&#xe677;</span
                >
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
                <router-link :to="{ path: '/MyAddressList' }">
                    <span class="top-receive-icon iconfont"> &#xe665;</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "topArea"
}
</script>

<style lang="scss" scoped>
.bg {
    margin-bottom: 53px;
    height: 156.5px;
    background-image: linear-gradient(
        0deg,
        rgba(0, 145, 255, 0) 4%,
        #0091ff 50%
    );
}
.top {
    position: relative;
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
        left: 18px;
        right: 18px;
        background: #fff;
        border-radius: 4px;
        padding: 16px;
        color: #333;
        box-shadow: 0px 2px 4px rgba($color: #000000, $alpha: 0.1);
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
        &-icon {
            position: absolute;
            top: 50%;
            right: 18px;
            transform: translateY(-50%);
            font-size: 18px;
        }
    }
}
</style>