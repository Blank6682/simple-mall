<template>
    <div class="cart">
        <div class="cart-title">我的购物车</div>
        <div class="cart-list">
            <div class="cart-list-item"></div>
        </div>
        <FooterTapBar :currentIndex="1" />
    </div>
</template>

<script>
import FooterTapBar from '../../components/FooterTapBar.vue'
export default {
    components: { FooterTapBar },

}
</script>

<style lang="scss" scoped>
@import "../../style/viriables";
@import "../../style/mixins";
.wrapper {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0.5rem;
    right: 0;
    background: $dark-bgColor;
}
.title {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    line-height: 0.44rem;
    background: $bgColor;
    font-size: 0.16rem;
    color: $content-fontcolor;
    text-align: center;
}
.empty {
    line-height: 0.44rem;
    color: $light-fontColor;
    font-size: 0.16rem;
    text-align: center;
}
.shops {
    overflow-y: scroll;
    position: absolute;
    top: 0.6rem;
    right: 0.18rem;
    bottom: 0.1rem;
    left: 0.18rem;
    background: $bgColor;
}
.shop {
    &__title {
        padding: 0.16rem;
        font-size: 0.16rem;
        color: $content-fontcolor;
    }
    &__wrapper {
        overflow-y: scroll;
        margin: 0 0.18rem;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0.6rem;
        top: 2.6rem;
    }
}
.products {
    &__list {
        background: $bgColor;
    }
    &__item {
        position: relative;
        display: flex;
        padding: 0 0.16rem 0.16rem 0.16rem;
        &__img {
            width: 0.46rem;
            height: 0.46rem;
            margin-right: 0.16rem;
        }
        &__detail {
            flex: 1;
        }
        &__title {
            margin: 0;
            line-height: 0.2rem;
            font-size: 0.14rem;
            color: $content-fontcolor;
            @include ellipsis;
        }
        &__price {
            display: flex;
            margin: 0.06rem 0 0 0;
            line-height: 0.2rem;
            font-size: 0.14rem;
            color: $hightlight-fontColor;
        }
        &__total {
            flex: 1;
            text-align: right;
            color: $dark-fontColor;
        }
        &__yen {
            font-size: 0.12rem;
        }
    }
}
</style>