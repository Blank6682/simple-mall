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

<style>
</style>