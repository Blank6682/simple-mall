<template>
    <div class="wraper">
        <Header />
        <Banner />
        <NearShop />
        <FooterTapBar :currentIndex="0"></FooterTapBar>
    </div>
</template>

<script>
// @ is an alias to /src
import FooterTapBar from '../../components/FooterTapBar'
import Banner from './Banner'
import Header from './Header'
import NearShop from './NearShop.vue'

export default {
    name: 'Home',
    components: {
        FooterTapBar,
        Banner,
        Header,
        NearShop
    }
}
</script>

<style lang="scss" scoped>
.wraper {
    // position: relative;
    margin: 0 18px;
}
</style>