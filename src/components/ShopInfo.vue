<template>
    <div class="warper">
        <div class="shop">
            <img class="shop-img" :src="item.imgUrl" />
            <div
                :class="{
                    'shop-content': true,
                    'shop-content-hide-border': hideBorder ? false : true,
                }"
            >
                <p class="shop-content-title">{{ item.name }}</p>
                <span class="shop-content-desc"> 月售{{ item.sales }}+ </span>
                <span class="shop-content-desc">
                    起送￥{{ item.expressLimit }}</span
                >
                <span class="shop-content-desc">
                    基础运费￥{{ item.expressPrice }}
                </span>
                <p class="shop-content-pref">
                    {{ item.slogan }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ShopInfo",
    props: { item: Object, hideBorder: Boolean }
}
</script>

<style lang="scss" scoped>
@import "../style/viriablles.scss";
.shop {
    display: flex;
    color: $content-fontcolor;
    margin-top: 12px;
    &-img {
        margin-right: 16px;
        width: 56px;
        height: 56px;
    }
    &-content {
        width: 100%;
        &-hide-border {
            border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
        }
        &-title {
            font-size: 16px;
            margin: 0 0 8px 0;
        }
        &-desc {
            font-size: 13px;
            margin: 0 16px 8px 0;
        }
        &-pref {
            font-size: 13px;
            color: #e93b3b;
            margin-bottom: 12px;
        }
    }
}
</style>