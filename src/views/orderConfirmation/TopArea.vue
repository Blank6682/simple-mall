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
import { useStore } from 'vuex';
export default {
    name: "topArea",
    setup () {
        const store = useStore()
        const addressList = store.state.addressList
        const defaultAddressInfo = addressList.find(item => item.defaultAddress == "true")
        return { addressList, defaultAddressInfo }
    }

}
</script>

<style lang="scss" scoped>
@import "../../style/viriablles.scss";
.bg {
    margin-bottom: 53rem;
    height: 156.5rem;
    background-image: linear-gradient(
        0deg,
        rgba(0, 145, 255, 0) 4%,
        $btn-bgColor 50%
    );
}
.top {
    position: relative;
    &-head {
        text-align: center;
        line-height: 68.5rem;
        color: $bgColor;
        &-back {
            position: absolute;
            left: 18rem;
            font-size: 22rem;
        }
    }
    &-receive {
        position: absolute;
        left: 18rem;
        right: 18rem;
        background: $bgColor;
        border-radius: 4rem;
        padding: 16rem;
        color: $content-fontColor;
        box-shadow: 0 2rem 4rem rgba($color: #000000, $alpha: 0.1);
        &-title {
            font-size: 16rem;
            margin-bottom: 14rem;
        }
        &-address {
            font-size: 14rem;
            margin-bottom: 6rem;
        }
        &-contact {
            font-size: 12rem;
            color: #666;
        }
        &-icon {
            position: absolute;
            top: 50%;
            right: 18rem;
            transform: translateY(-50%);
            font-size: 18rem;
        }
    }
}
</style>