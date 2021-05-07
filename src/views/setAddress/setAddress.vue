<template>
    <div class="address">
        <div class="head">
            <span class="head-back iconfont" @click="$router.back(-1)">
                &#xe677;
            </span>
            <h3 class="head-title">
                {{ $route.params.id == -1 ? "新建" : "编辑" }}收货地址
            </h3>
            <span class="head-save" @click="handleSaveAddress(item, addressId)"
                >保存</span
            >
        </div>
        <div class="content">
            <div class="content-item">
                <label>所在城市：</label>
                <input type="text" v-model="item.city" placeholder="如北京" />
            </div>
            <div class="content-item">
                <label> 小区/大厦/学校：</label>
                <input
                    type="text"
                    v-model="item.community"
                    placeholder="如理工大学国防科技园"
                />
            </div>
            <div class="content-item">
                <label> 楼号-门牌号：</label>
                <input
                    type="text"
                    v-model="item.floorNumber"
                    placeholder="A号楼B层"
                />
            </div>
            <div class="content-item">
                <label> 收货人：</label>
                <input
                    type="text"
                    v-model="item.uesrName"
                    placeholder="请填写收货人的姓名"
                />
            </div>
            <div class="content-item">
                <label> 联系电话：</label>
                <input
                    type="text"
                    v-model="item.phone"
                    placeholder="请填写收货手机号码"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
export default {
    name: 'SetAddress',
    setup () {
        const store = useStore()
        const router = useRouter()
        const route = useRoute()
        let item = reactive({
            city: "",
            community: "",
            floorNumber: "",
            uesrName: "",
            phone: ""
        })
        const addressId = route.params.id
        if (addressId != -1) {
            item = store.state.addressList[addressId]
        }
        const handleSaveAddress = (addressInfo, addressId) => {
            store.commit("handleSaveAddress", { addressInfo, addressId })
            router.back(-1)
        }
        return { item, handleSaveAddress, addressId }
    }

}
</script>

<style lang="scss" scoped>
@import "../../style/viriablles.scss";
// .address {
// }
.head {
    display: flex;
    justify-content: space-between;
    padding: 11rem 18rem;
    &-title {
        font-size: 16rem;
        color: $content-fontColor;
    }
}
.content {
    margin: 0 18rem;
    font-size: 14rem;
    &-item {
        display: flex;
        padding: 12rem 0;
        border-bottom: 1rem solid rgba($color: #000000, $alpha: 0.2);
        input {
            flex: 1;
            width: 100%;
            border-radius: 4rem;
            border: none;
            outline: none;
        }
    }
}
</style>