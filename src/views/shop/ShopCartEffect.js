import { toRefs } from 'vue'
import { useStore } from 'vuex'

//购物车相关逻辑
export const useShopCartEffect = () => {
    const store = useStore()
    const { shopCartList } = toRefs(store.state)

    const changeShopCartItemInfo = (shopId, productId, productInfo, num) => {
        //提交changeShopCartItemInfo事件 可以同步修改store的数据
        store.commit("changeShopCartItemInfo", { shopId, productId, productInfo, num })
    }
    return { shopCartList, changeShopCartItemInfo }
}