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
    color: $content-fontColor;
    margin-top: 12rem;
    &-img {
        margin-right: 16rem;
        width: 56rem;
        height: 56rem;
    }
    &-content {
        width: 100%;
        &-hide-border {
            border-bottom: 1rem solid rgba($color: #000000, $alpha: 0.1);
        }
        &-title {
            font-size: 16rem;
            margin: 0 0 8rem 0;
        }
        &-desc {
            font-size: 13rem;
            margin: 0 16rem 8rem 0;
        }
        &-pref {
            font-size: 13rem;
            color: $hightlight-fontColor;
            margin-bottom: 12rem;
        }
    }
}
</style>