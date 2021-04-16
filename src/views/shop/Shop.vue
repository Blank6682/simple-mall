<template>
    <div class="shop">
        <!-- 头部搜索框 -->
        <div class="header">
            <div class="header-back" @click="handleBackClick">
                <span class="header-back-icon iconfont">&#xe677;</span>
            </div>
            <div class="header-search">
                <span class="header-search-icon iconfont">&#xe60c;</span>
                <input type="search" placeholder="请输入商品名称搜索" />
            </div>
        </div>
        <div class="shop-info">
            <ShopInfo :item="item" :hideBorder="true" />
        </div>
        <Content />
        <ShopCart></ShopCart>
        <Toast v-if="isShow" :message="toastMessage"></Toast>
    </div>
</template>

<script>
import { reactive, toRefs, } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo.vue'
import Toast, { useToastEffect } from '../../components/Toast'
import Content from './Content'
import ShopCart from './ShopCart.vue'

//处理获取商店信息逻辑
const uesShopInfoEffect = (showToast) => {
    // route可以获取路由中的数据
    const route = useRoute();
    const data = reactive({ item: {} })
    const getShopInfo = async () => {
        const result = await get(`/api/shop/${route.params.id}`)//通过route获取id
        if (result?.errno === 0 && result.data) {
            data.item = result.data
        } else {
            showToast(result.message)
        }
    }
    const { item } = toRefs(data)
    return { item, getShopInfo }
}

//返回主页逻辑
const useBackRouterEffect = () => {
    const router = useRouter();
    const handleBackClick = () => {
        router.push({ name: 'Home' })
    }
    return { handleBackClick }
}
export default {
    components: { ShopInfo, Toast, Content, ShopCart },
    setup () {
        const { isShow, toastMessage, showToast } = useToastEffect();
        const { handleBackClick } = useBackRouterEffect();
        const { item, getShopInfo } = uesShopInfoEffect(showToast);
        getShopInfo()
        return {
            item, toastMessage, isShow,
            handleBackClick
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriablles.scss";
//头部样式
.header {
    margin: 16px 18px;
    display: flex;
    &-back {
        margin-right: 16px;
        &-icon {
            font-size: 22px;
        }
    }
    &-search {
        display: flex;
        align-items: center;
        width: 100%;
        height: 32px;
        border-radius: 16px;
        background: $search-bgColor;
        &-icon {
            font-size: 16px;
            padding: 8px 12px 8px 16px;
            text-align: center;
        }
        input {
            width: 100%;
            height: 32px;
            border-radius: 16px;
            font-size: 14px;
            outline: none;
            border: 0;
            background: $search-bgColor;
        }
    }
}
//商家信息
.shop-info {
    margin: 0 18px;
}
</style>