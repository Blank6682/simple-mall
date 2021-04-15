import { createStore } from 'vuex'

export default createStore({
    state: {
        //购物车数据结构 shopCartList: {shopId :productId:{}}
        //第一层是商店Id：shopId  第二层是商品Id及其内容 productId:{}
        shopCartList: {}
    },
    mutations: {
        addItemToShopCart (state, payload) {
            const { shopId, productId, productInfo } = payload
            //商店信息
            let shopInfo = state.shopCartList[shopId]
            if (!shopInfo) {
                shopInfo = {}//不存在则赋值空对象
            }
            //商品信息
            let product = shopInfo[productId]
            if (!product) {
                product = productInfo //不存在则把商品信息添加进去
                product.count = 0
            }

            product.count += 1
            //把信息添加到shopCartList
            shopInfo[productId] = product
            state.shopCartList[shopId] = shopInfo
        },
        minusItemToShopCart (state, payload) {
            const { shopId, productId } = payload
            state.shopCartList[shopId][productId].count--;
        }
    },
    actions: {
    },
    modules: {
    }
})
