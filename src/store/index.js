import { createStore } from 'vuex'


const setLocalStorage = (state) => {
    const { cartList } = state
    const cartListString = JSON.stringify(cartList)
    localStorage.cartList = cartListString
}
const getLocalcartList = () => {
    try {
        return JSON.parse(localStorage.cartList)
    } catch (e) {
        return {}
    }
}

export default createStore({
    state: {
        //购物车数据结构 cartList: {shopId :{shopName:"",productList:{}}}
        //第一层是商店Id：shopId  第二层是商店名及其内容 {shopName:"",productList:{}}
        cartList: getLocalcartList(),
        addressList: {}
    },
    getters: {
    },
    mutations: {
        //商品的增减
        changeCartItemInfo (state, payload) {
            const { shopId, productId, productInfo, num, shopName } = payload
            //商店信息
            let shopInfo = state.cartList[shopId] || { shopName: shopName, productList: {} }//不存在则赋值空对象

            //商品信息
            let product = shopInfo.productList[productId]
            if (!product) {
                product = productInfo //不存在则把商品信息添加进去
                product.count = 0
                product.checked = true
            }

            product.count += num //计算商品总数
            if (num > 0) {
                product.checked = true
            }
            if (product.count < 0) {
                product.count = 0
            }

            //把信息添加到cartList
            shopInfo.productList[productId] = product
            state.cartList[shopId] = shopInfo
            setLocalStorage(state)
        },

        //商品的选择
        changeCartItemChecked (state, payload) {
            const { shopId, productId } = payload
            let shopInfo = state.cartList[shopId]
            shopInfo.productList[productId].checked = !shopInfo.productList[productId].checked
            setLocalStorage(state)
        },

        //清空购物车
        clearCartProducts (state, payload) {
            const { shopId } = payload
            state.cartList[shopId].productList = {};
            setLocalStorage(state)
        },

        //全选
        changeCartProductsChecked (state, payload) {
            const { shopId, isCheckedAll } = payload
            let cartList = state.cartList[shopId]?.productList;
            for (let i in cartList) {
                cartList[i].checked = isCheckedAll;
            }
            setLocalStorage(state)
        },
        //收货地址设置
        handleSaveAddress (state, addressList) {
            state.addressList.splice(0, addressList.length, ...addressList)
        }
    },
    actions: {
    },
    modules: {
    }
})
