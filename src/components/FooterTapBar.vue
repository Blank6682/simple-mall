<template>
    <div class="docker">
        <div v-for="item in dockerList" :key="item.icon" class="docker-item">
            <div class="docker-item-icon iconfont" v-html="item.icon"></div>
            <div class="docker-item-title">{{ item.title }}</div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue'
import "../style/iconfont.css"
export default {
    name: "Docker",
    setup () {
        const dockerList = reactive([
            { title: "首页", icon: "&#xe752;", },
            { title: "购物车", icon: "&#xe64e;", },
            { title: "订单", icon: "&#xe600;", },
            { title: "我的", icon: "&#xe63c;", },
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
    height: 49px;
    border-top: 1px solid rgba($color: #000000, $alpha: 0.1);
    color: $content-fontcolor;
    background-color: #fff;
}
.docker-item {
    flex: 1;
    text-align: center;
    .docker-item-title {
        margin-bottom: 6px;
        font-size: 10px;
    }
    .iconfont {
        margin: 5px 0 2px;
        font-size: 20px;
    }
}
.docker-item:hover {
    color: #1fa4fc;
}
</style>