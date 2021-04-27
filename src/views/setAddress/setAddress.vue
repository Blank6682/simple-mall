<template>
    <div class="address">
        <div class="head">
            <span class="head-back iconfont" @click="$router.back(-1)">
                &#xe677;
            </span>
            <h3 class="head-title">编辑收货地址</h3>
            <span class="head-save" @click="handleSaveAddress(item)">保存</span>
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
export default {
    name: 'SetAddress',
    setup () {
        const store = useStore()
        const item = reactive({
            id: "1",
            city: "北京",
            community: "理工大学国防科技园",
            floorNumber: "2号楼10层",
            uesrName: "幺妹",
            phone: 1336546466
        })
        const handleSaveAddress = (addressInfo) => {
            store.commit("handleSaveAddress", { addressInfo })
        }
        return { item, handleSaveAddress }
    }

}
</script>

<style lang="scss" scoped>
// .address {
// }
.head {
    display: flex;
    justify-content: space-between;
    padding: 11px 18px;
    &-title {
        font-size: 16px;
        color: #333;
    }
}
.content {
    margin: 0 18px;
    font-size: 14px;
    &-item {
        display: flex;
        padding: 12px 0;
        border-bottom: 1px solid rgba($color: #000000, $alpha: 0.2);
        input {
            flex: 1;
            width: 100%;
            border-radius: 4px;
            border: none;
            outline: none;
        }
    }
}
</style>