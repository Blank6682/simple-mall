<template>
    <div class="shop">
        <div class="hearder">
            <div class="hearder-back" @click="handleBackClick">
                <span class="hearder-back-icon iconfont">&#xe677;</span>
            </div>
            <div class="hearder-search">
                <span class="hearder-search-icon iconfont">&#xe60c;</span>
                <input type="search" placeholder="请输入商品名称搜索" />
            </div>
        </div>
        <div class="shop-info">
            <ShopInfo :item="item" :hideBorder="true" />
        </div>
        <div class="container">
            <div class="sidebar">
                <div class="sidebar-item">全部商品</div>
                <div class="sidebar-item">秒杀</div>
                <div class="sidebar-item">新鲜水果</div>
                <div class="sidebar-item">休闲食品</div>
                <div class="sidebar-item">时令蔬菜</div>
                <div class="sidebar-item">肉蛋家禽</div>
            </div>
            <div class="product">
                <div
                    class="product-item"
                    v-for="item in shopList"
                    :key="item.id"
                >
                    <img class="product-item-img" :src="item.imgUrl" />
                    <div class="product-item-details">
                        <div class="product-item-details-name">
                            {{ item.name }}
                        </div>
                        <div class="product-item-details-sales">
                            月售{{ item.sales }}
                        </div>
                        <div class="product-item-details-price">
                            <div class="product-item-details-price-now">
                                <span>￥</span>{{ item.price }}
                            </div>
                            <div class="product-item-details-price-origin">
                                ￥{{ item.originPrice }}
                            </div>
                        </div>
                    </div>
                    <div class="product-item-amount">
                        <div
                            class="product-item-amount-mius iconfont"
                            v-if="item.amount"
                        >
                            &#xe60b;
                        </div>
                        <span
                            v-if="item.amount"
                            class="product-item-amount-number"
                            >{{ item.amount }}</span
                        >
                        <div class="product-item-amount-plus iconfont">
                            &#xe61e;
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="accounts">
            <div class="accounts-cart">
                <span class="accounts-cart-icon iconfont">&#xe605;</span>
                <div class="accounts-cart-amount">1</div>
            </div>
            <div class="accounts-total">总计：￥<span>{{}}</span></div>
            <div class="accounts-btn">去结算</div>
        </div>
    </div>
</template>

<script>
import { reactive, } from 'vue'
import { useRouter } from 'vue-router'
import ShopInfo from '../../components/ShopInfo.vue'
export default {
    components: { ShopInfo },
    setup () {
        const shopList = reactive([{
            id: 1,
            name: "番茄250g/份",
            sales: "10",
            price: "33.6",
            originPrice: "33.6",
            amount: 1,
            imgUrl: "http://www.dell-lee.com/imgs/vue3/超市.png"
        }, {
            id: 2,
            name: "番茄250g/份",
            sales: "10",
            price: "33.6",
            originPrice: "33.6",
            amount: 0,
            imgUrl: "http://www.dell-lee.com/imgs/vue3/超市.png"
        }, {
            id: 32,
            name: "番茄250g/份",
            sales: "10",
            price: "33.6",
            originPrice: "33.6",
            amount: 0,
            imgUrl: "http://www.dell-lee.com/imgs/vue3/超市.png"
        },
        ])
        const router = useRouter();
        const item = reactive({
            expressLimit: 0,
            expressPrice: 5,
            imgUrl: "http://www.dell-lee.com/imgs/vue3/near.png",
            name: "沃尔玛",
            sales: 10000,
            slogan: "VIP尊享满89元减4元运费券",
            _id: "1"
        })
        const handleBackClick = () => {
            router.push({ name: 'home' })
        }
        return { item, handleBackClick, shopList }
    }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriablles.scss";
.hearder {
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
        width: 310px;
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
.shop-info {
    margin: 0 18px;
}
.container {
    display: flex;
}
.sidebar {
    background: $search-bgColor;
    border-radius: 2px;
    border-radius: 2px;
    width: 76px;
    height: 100vh;
    margin-top: 16px;
    &-item {
        width: 76px;
        height: 60px;
        color: $content-fontcolor;
        text-align: center;
        line-height: 60px;
    }
    &-item:nth-child(1) {
        background: #fff;
    }
}
.product {
    margin: 0 18px 0 16px;
    width: 100%;
    &-item {
        position: relative;
        display: flex;
        align-items: center;
        padding-bottom: 18px;
        font-size: 14px;
        border-bottom: 1px solid #f1f1f1;
        margin: 12px 0;
        &-img {
            width: 68px;
            height: 68px;
            margin-right: 16px;
        }
        &-details {
            color: $content-fontcolor;
            &-name {
                font-weight: 550;
            }
            &-sales {
                font-size: 12px;
                margin: 6px 0;
            }
            &-price-now {
                display: inline-block;
                margin-right: 6px;
                color: #e93b3b;
                font-weight: bold;
                line-height: 14px;
                span {
                    font-size: 10px;
                }
            }
            &-price-origin {
                display: inline-block;
                color: #999999;
                font-size: 10px;
                line-height: 20px;
            }
        }
        &-amount {
            position: absolute;
            display: flex;
            bottom: 18px;
            right: 0;
            &-mius,
            &-plus {
                width: 20px;
                height: 20px;
                font-size: 14px;
                text-align: center;
                border-radius: 50%;
            }
            &-mius {
                box-sizing: border-box;
                color: #666666;
                border: 1.8px solid #666666;
            }
            &-plus {
                line-height: 20px;
                background-color: #0091ff;
                color: #fff;
            }
            &-number {
                margin: 0 10px;
                color: $content-fontcolor;
            }
        }
    }
}
.accounts {
    position: fixed;
    display: flex;
    bottom: 0;
    width: 100%;
    height: 49px;
    text-align: center;
    &-cart-icon {
        font-size: 20px;
    }
}
</style>