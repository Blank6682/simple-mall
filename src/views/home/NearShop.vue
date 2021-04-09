<template>
    <div class="near-shop">
        <div class="shop-list">
            <div class="shop-list-title">附件店铺</div>
            <ShopInfo
                v-for="item in nearShopList"
                :key="item._id"
                :item="item"
            />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo'

//处理获取附近店铺数据的逻辑
const useNearShopListEffter = () => {
    const nearShopList = ref([]);
    const getNearShopList = async () => {
        const result = await get("/api/shop/hot-list")
        console.log(result)
        if (result?.errno === 0 && result?.data?.length) {
            nearShopList.value = result.data
        }
    }
    return { getNearShopList, nearShopList }
}

export default {
    name: "NearShop",
    components: { ShopInfo },
    setup () {
        const { getNearShopList, nearShopList } = useNearShopListEffter()
        getNearShopList();
        return { nearShopList }
    }
}
</script>

<style lang="scss" scoped>
.shop-list {
    margin-bottom: 49px;
    &-title {
        font-size: 18px;
        font-weight: bold;
        line-height: 25px;
        margin: 16px 0 2px 0;
    }
}
</style>