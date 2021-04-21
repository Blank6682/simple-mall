import { useStore } from 'vuex'

//购物车相关逻辑
export const useShopCartEffect = () => {
    const store = useStore()
    const shopCartList = store.state.shopCartList
    const changeCartItemInfo = (shopId, productId, productInfo, num) => {
        //提交changeCartItemInfo事件 可以同步修改store的数据
        store.commit("changeCartItemInfo", { shopId, productId, productInfo, num })
    }
    return { changeCartItemInfo, shopCartList }
}