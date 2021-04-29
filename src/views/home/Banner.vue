<template>
    <div class="container">
        <div class="banner">
            <img
                class="banner-img"
                src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
            />
        </div>
        <div class="nav">
            <div class="nav-item" v-for="item in navList" :key="item.desc">
                <img
                    class="nav-item-icon"
                    :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`"
                />
                <div class="nav-item-title">{{ item.desc }}</div>
            </div>
        </div>
        <div class="border-line"></div>
    </div>
</template>

<script>
import { reactive } from 'vue'
export default {
    setup () {
        const navList = reactive([
            { imgName: "超市", desc: "超市便利" },
            { imgName: "菜市场", desc: "菜市场" },
            { imgName: "水果店", desc: "水果店" },
            { imgName: "鲜花", desc: "鲜花绿植" },
            { imgName: "医药健康", desc: "医药健康" },
            { imgName: "家居", desc: "家居时尚" },
            { imgName: "蛋糕", desc: "烘培蛋糕" },
            { imgName: "签到", desc: "签到" },
            { imgName: "大牌免运", desc: "大牌免运" },
            { imgName: "红包", desc: "红包套餐" },])
        return { navList }
    }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriablles.scss";
.banner {
    margin-top: 12rem;
    &-img {
        width: 100%;
        border-bottom: 25%;
    }
}
.nav {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 16rem;
    color: $content-fontColor;
    &-item {
        width: 20%;
        &-icon {
            display: block;
            width: 40rem;
            height: 40rem;
            margin: 0 auto;
        }
        &-title {
            text-align: center;
            margin: 6rem 0 16rem 0;
            font-size: 12rem;
        }
    }
}
.border-line {
    margin: 0 -18rem;
    height: 10rem;
    background: $content-bgColor;
}
</style>
