<template>
    <div class="content">
        <div class="content-bar">
            <div class="content-bar-list">
                <div
                    class="content-bar-item"
                    v-for="(i, index) in barList"
                    :key="i.icon"
                >
                    <div
                        class="content-bar-icon iconfont"
                        v-html="i.icon"
                        :style="{ color: i.color }"
                    ></div>
                    <div class="content-bar-title">{{ i.title }}</div>
                    <span class="content-bar-back iconfont">&#xe665;</span>
                    <template v-if="index == 1">
                        <div class="address" @click="handleSetAddress()"></div>
                    </template>
                </div>
            </div>
        </div>
    </div>
    <div class="logout" @click="handleSignOut()">退出登录</div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
export default {
    name: "ContentBar",
    setup () {
        const router = useRouter()
        const barList = reactive([
            { icon: "&#xe68a;", title: "我的钱包", color: "#ED4A47" },
            { icon: "&#xe636;", title: "收货地址", color: "#32C5FF" },
            { icon: "&#xe60a;", title: "客服与帮助", color: "#9013FE " },
        ])
        //处理退出登录
        const handleSignOut = () => {
            localStorage.removeItem("isLogin")
            router.replace({ name: "Login" })
        }
        const handleSetAddress = () => {
            router.push({ name: 'MyAddressList' })
        }
        return { barList, handleSignOut, handleSetAddress }
    }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriablles.scss";
.content {
    position: relative;
    &-bar {
        position: absolute;
        top: 16px;
        right: 18px;
        left: 18px;
        background: #fff;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.08);
        border-radius: 8px;
        &-list {
            padding: 16px;
        }
        &-item {
            position: relative;
            display: flex;
            padding: ;: 12px 0;
            text-align: center;
        }
        &-list:first-child {
            padding-top: 0px;
        }
        &-list:last-child {
            padding-bottom: 0px;
        }
        &-icon {
            margin-right: 12px;
            font-size: 22px;
        }
        &-title {
            font-size: 14px;
            color: #262626;
        }
        &-back {
            position: absolute;
            right: 0;
            font-size: 12px;
        }
    }
}
.address {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
}
.logout {
    position: absolute;
    left: 36rem;
    right: 36rem;
    bottom: 18rem;
    padding: 12rem 0;
    font-size: 16rem;
    text-align: center;
    color: #fff;
    background: $btn-bgColor;
    border-radius: 10rem;
}
</style>