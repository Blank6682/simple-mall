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
                    :key="item.id"
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
.head {
    display: flex;
    justify-content: space-between;
    padding: 11px 18px;
    &-title {
        font-size: 16px;
        color: #333;
    }
    &-create {
        color: #000;
    }
}
.address {
    &-title {
        font-size: 14px;
        margin: 16px 0 12px 18px;
    }
    &-list {
        position: absolute;
        left: 18px;
        right: 18px;
        &-item {
            position: relative;
            padding: 16px;
            margin-bottom: 16px;
            border-radius: 4px;
            color: #333;
            background: #fff;
            box-shadow: 0px 2px 4px rgba($color: #000000, $alpha: 0.1);
        }
    }

    &-contact {
        display: flex;
        width: 260px;
        font-size: 14px;
        color: #999;
        &-phone {
            flex: 1;
            text-align: center;
        }
    }
    &-details {
        margin-top: 6px;
        max-width: 260px;
        font-size: 14px;
        line-height: 20px;
    }
    &-icon {
        position: absolute;
        top: 50%;
        right: 18px;
        transform: translateY(-50%);
        font-size: 18px;
    }
}
</style>