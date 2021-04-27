import { useStore } from 'vuex'

//购物车相关逻辑
export const useCartEffect = () => {
    const store = useStore()
    const cartList = store.state.cartList
    const changeCartItemInfo = (shopId, productId, productInfo, num, shopName) => {
        //提交changeCartItemInfo事件 可以同步修改store的数据
        store.commit("changeCartItemInfo", { shopId, productId, productInfo, num, shopName })
    }
    return { changeCartItemInfo, cartList }
}