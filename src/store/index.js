import { createStore } from 'vuex'

export default createStore({
    state: {
        //购物车数据结构 shopCartList: {shopId :productId:{}}
        //第一层是商店Id：shopId  第二层是商品Id及其内容 productId:{}
        shopCartList: {}
    },
    getters: {
        totalPrice: state => {
            return state.shopCartList[shopId]
        }
    },
    mutations: {
        //商品的增减
        changeCartItemInfo (state, payload) {
            const { shopId, productId, productInfo, num } = payload
            console.log("🚀 ~ file: index.js ~ line 18 ~ changeCartItemInfo ~ productId", productId)
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
                product.checked = true
            }
            product.count += num
            if (num > 0) {
                product.checked = true
            }
            if (product.count < 0) {
                product.count = 0
            }
            //把信息添加到shopCartList
            shopInfo[productId] = product
            state.shopCartList[shopId] = shopInfo
        },
        //商品的选择
        changeCartItemChecked (state, payload) {
            const { shopId, productId } = payload
            let shopInfo = state.shopCartList[shopId]
            shopInfo[productId].checked = !shopInfo[productId].checked
        }
    },
    actions: {
    },
    modules: {
    }
})
