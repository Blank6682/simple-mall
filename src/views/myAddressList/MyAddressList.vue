<template>
    <div class="warper">
        <div class="head">
            <span class="head-back iconfont" @click="$router.back(-1)">
                &#xe677;
            </span>
            <h3 class="head-title">管理收货地址</h3>
            <router-link :to="{ path: '/setAddress/-1' }">
                <span class="head-create"> 新建</span>
            </router-link>
        </div>
        <div class="address">
            <p class="address-title">我的收获地址</p>
            <div class="address-list">
                <div
                    class="address-list-item"
                    v-for="(item, index) in addressList"
                    :key="item + index"
                >
                    <div class="address-contact">
                        <div class="address-contact-user">
                            {{ item.uesrName }}
                        </div>
                        <div class="address-contact-phone">
                            {{ item.phone }}
                        </div>
                    </div>
                    <div class="address-details">
                        {{ item.city }}
                        {{ item.community }}
                        {{ item.floorNumber }}
                    </div>
                    <router-link :to="`/setAddress/${index}`">
                        <span class="address-icon iconfont"> &#xe665;</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>p

<script>
import { useStore } from 'vuex'

// //选择地址逻辑
// const useChooseAddressEffect = () => {
//     const handleChooseAddress=()=>{

//     }
// }
export default {
    name: "MyAddressList",
    setup () {
        const store = useStore();
        const addressList = store.state.addressList
        return { addressList }
    }

}
</script>

<style lang="scss" scoped>
@import "../../style/viriablles.scss";
.head {
    display: flex;
    justify-content: space-between;
    padding: 11rem 18rem;
    &-title {
        font-size: 16rem;
        color: $content-fontColor;
    }
    &-create {
        color: $darkColor;
    }
}
.address {
    &-title {
        font-size: 14rem;
        margin: 16rem 0 12rem 18rem;
    }
    &-list {
        position: absolute;
        left: 18rem;
        right: 18rem;
        &-item {
            position: relative;
            padding: 16rem;
            margin-bottom: 16rem;
            border-radius: 4rem;
            color: $content-fontColor;
            background: $bgColor;
            box-shadow: 0rem -1rem 4rem 1rem rgba($color: #000000, $alpha: 0.1);
        }
    }

    &-contact {
        display: flex;
        width: 260rem;
        font-size: 14rem;
        color: $light-fontColor;
        &-phone {
            flex: 1;
            text-align: center;
        }
    }
    &-details {
        margin-top: 6rem;
        max-width: 260rem;
        font-size: 14rem;
        line-height: 20rem;
    }
    &-icon {
        position: absolute;
        top: 50%;
        right: 18rem;
        transform: translateY(-50%);
        font-size: 18rem;
    }
}
</style>