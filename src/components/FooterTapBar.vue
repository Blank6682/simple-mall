<template>
    <div class="docker">
        <div
            v-for="(item, index) in dockerList"
            :key="item.icon"
            :class="{
                'docker-item': true,
                'docker-item-active': index === currentIndex,
            }"
        >
            <router-link :to="item.to">
                <div class="docker-item-icon iconfont" v-html="item.icon"></div>
                <div class="docker-item-title">{{ item.title }}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue'
import "../style/iconfont.css"
export default {
    name: "Docker",
    props: ["currentIndex"],
    setup () {
        const dockerList = reactive([
            { title: "首页", icon: "&#xe752;", to: { name: "Home" } },
            { title: "购物车", icon: "&#xe64e;", to: {} },
            { title: "订单", icon: "&#xe600;", to: { name: "OrderList" } },
            { title: "我的", icon: "&#xe63c;", to: {} },
        ])
        return { dockerList }
    },
}
</script>

<style lang="scss" scoped>
@import "../style/viriablles.scss";
.docker {
    position: fixed;
    display: flex;
    left: 0;
    right: 0;
    bottom: 0;
    height: 49rem;
    border-top: 1rem solid rgba($color: #000000, $alpha: 0.1);
    color: $content-fontColor;
    background-color: $bgColor;
    &-item {
        flex: 1;
        text-align: center;
        &-title {
            margin-bottom: 6rem;
            font-size: 10rem;
        }
        .iconfont {
            margin: 5rem 0 2rem;
            font-size: 20rem;
        }
        a {
            color: $content-fontColor;
        }
        &-active {
            a {
                color: #1fa4fc;
            }
        }
    }
}
</style>