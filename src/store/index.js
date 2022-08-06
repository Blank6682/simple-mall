import { createStore } from 'vuex'
import { getLocal ,setLocal } from '../utils/useLocalStorage';


export default createStore({
    state: {
        //购物车数据结构 cartList: {shopId :{shopName:"",addressId:"",productList:{}}}
        //第一层是商店Id：shopId  第二层是商店名和地址及其内容 {shopName:"",productList:{}}
        cartList: getLocal('cartList') || {},
        addressList: getLocal('addressList') ||[{
            'city': "广州市",
            'community': "天河区",
            'defaultAddress': true,
            'floorNumber': "天河城1号楼1117号",
            'phone': "136666888",
            'userName': "吴先生",
        }]//模拟初始地址数据
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
            setLocal(state,'carList')
        },

        //商品的选择
        changeCartItemChecked (state, payload) {
            const { shopId, productId } = payload
            let shopInfo = state.cartList[shopId]
            shopInfo.productList[productId].checked = !shopInfo.productList[productId].checked
            setLocal(state,'carList')
        },

        //清空购物车
        clearCartProducts (state, payload) {
            const { shopId } = payload
            state.cartList[shopId].productList = {};
            setLocal(state,'carList')
        },

        //全选
        changeCartProductsChecked (state, payload) {
            const { shopId, isCheckedAll } = payload
            let cartList = state.cartList[shopId]?.productList;
            for (let i in cartList) {
                cartList[i].checked = isCheckedAll;
            }
            setLocal(state,'carList')
        },
        //收货地址选择
        chooseAddress (state, payload) {
            const { addressId } = payload
            state.cartList.addressId = addressId
            setLocal(state,'carList')
        },
        //收货地址设置
        handleSaveAddress (state, payload) {
            const { addressInfo, addressId } = payload
            
            //是否新建
            if (addressId == -1) {
                let len = state.addressList.length
                state.addressList.splice(len, 1, addressInfo)

                if (len === 1) {
                    state.addressList[0].defaultAddress = true
                } else if(addressInfo.defaultAddress === 'true') {
                    state.addressList.forEach(item => {
                        item.defaultAddress = false
                    });
                    state.addressList[len].defaultAddress = true
                }

                setLocal(state,'addressList')
            } else {
                state.addressList[addressId] = addressInfo
            
                if (addressInfo.defaultAddress === 'true') {
                    state.addressList.forEach((item, index) => {
                        if (index !== addressId) {
                            item.defaultAddress = false
                        }
                    });
                    state.addressList[addressId].defaultAddress = true
                } else {
                    state.addressList[addressId].defaultAddress = false
                    let flag = state.addressList.find(i => {
                        i.defaultAddress ==true
                    })
                    if (!flag) {
                        state.addressList[0].defaultAddress = true
                    }
                }

                setLocal(state,'addressList')
            }
        },
        deleteAddress(state, payload) {

            let len = state.addressList.length
            
            if (state.addressList[payload].defaultAddress && len >= 2) {
                state.addressList.splice(payload, 1)
                state.addressList[0].defaultAddress = true
            } else  {
                state.addressList.splice(payload, 1)
            }

            setLocal(state, 'addressList')
            getLocal(state, 'addressList')
        }
    },
    actions: {
    },
    modules: {
    }
})
