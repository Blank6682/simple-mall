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
            <p class="address-tip" v-if="Object.keys(addressList).length === 0">
                暂无收货地址
            </p>
            <template v-else>
                <p class="address-title">我的收货地址</p>
                <div class="address-list">
                    <div
                        class="address-list-item"
                        v-for="(item, index) in addressList"
                        :key="item + index"
                    >
                        <div class="address-contact">
                            <div class="address-contact-user">
                                {{ item.userName }}
                            </div>
                            <div class="address-contact-phone">
                                {{ item.phone }}
                            </div>
                            <div class="address-contact-defAd">
                                {{ item.defaultAddress? '默认':'' }}
                            </div>
                        </div>
                        <div class="address-details">
                            {{ item.city }}
                            {{ item.community }}
                            {{ item.floorNumber }}
                        </div>
                        <div class="address-icon">
                        <router-link :to="`/setAddress/${index}`">
                            <span class="iconfont"> &#xe665;</span>
                        </router-link>
                        <span v-on:click="deleteAddress(index)">
                            <svg t="1659723729193" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2260" width="16" height="16"><path d="M761.6 701.44a21.333333 21.333333 0 0 1 0 30.293333l-29.866667 29.866667a21.333333 21.333333 0 0 1-30.293333 0L512 572.16l-189.44 189.44a21.333333 21.333333 0 0 1-30.293333 0l-29.866667-29.866667a21.333333 21.333333 0 0 1 0-30.293333L451.84 512 262.4 322.56a21.333333 21.333333 0 0 1 0-30.293333l29.866667-29.866667a21.333333 21.333333 0 0 1 30.293333 0L512 451.84l189.44-189.44a21.333333 21.333333 0 0 1 30.293333 0l29.866667 29.866667a21.333333 21.333333 0 0 1 0 30.293333L572.16 512z" p-id="2261"></path></svg>
                        </span>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { useAddressEffect } from '../../effects/AddressEffect';

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

        const deleteAddress = useAddressEffect()
        
        return { addressList,deleteAddress }
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
    position: relative;
    &-tip{
        position: absolute;
        top: 50%;
        left: 50%;
        padding-top:60rem;
        transform: translate(-50%,-50%);
        font-size: 16rem;
    }
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
        height: 50rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transform: translateY(-50%);
        span{
            font-size: 16rem;
        }
    }
}
</style>
