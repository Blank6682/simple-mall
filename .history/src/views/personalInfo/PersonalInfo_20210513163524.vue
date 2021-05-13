<template>
    <div class="user">
        <div class="user-bg"></div>
        <span class="user-edit iconfont">&#xea85;</span>
        <div class="user-info">
            <img class="user-info-img" src="../../assets/uesrImg.jpg" alt="" />
            <div class="user-info-name">
                <!-- {{ userInfo.userName }} -->
                BlankZro
                <div class="user-grade">
                    <div class="user-grade-icon iconfont">&#xe619;</div>
                    <span class="user-grade-number">16</span>
                </div>
            </div>

            <p class="user-info-id">ID:{{ userInfo._id }}</p>
            <div class="user-info-property">
                <ul class="user-property">
                    <li>
                        <p class="user-property-title">红包</p>
                        <p class="user-property-number">218</p>
                    </li>
                    <li>
                        <p class="user-property-title">优惠卷</p>
                        <p class="user-property-number">12张</p>
                    </li>
                    <li>
                        <p class="user-property-title">鲜豆</p>
                        <p class="user-property-number">88</p>
                    </li>
                    <li>
                        <p class="user-property-title">白条</p>
                        <p class="user-property-number">1000</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue'
import { get } from "../../utils/request"

//获取用户信息逻辑
const useUserEffect = () => {
    const userInfo = reactive({ _id: "", userName: "" })
    const getUserInfo = async () => {
        const result = await get("/api/user/info")
        if (result.errno === 0 && result?.data) {
            const { _id, username } = result.data
            userInfo._id = _id || ""
            userInfo.userName = username || ""
        }
    }
    getUserInfo()
    return { userInfo }
}
export default {
    name: "PersonalInfo",
    setup () {
        const { userInfo } = useUserEffect()
        return { userInfo }
    }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriablles.scss";
.user {
    position: relative;
    overflow: hidden;
    &-bg {
        position: absolute;
        width: 200%;
        height: 160%;
        transform-origin: center;
        transform: translate(-25%, -50%);
        border-radius: 50%;
        background-image: linear-gradient(239deg, #3a6ff3 0%, #50c7fb 100%);
    }
    &-edit {
        position: absolute;
        top: 40px;
        right: 21px;
        color: #eee;
        font-size: 20rem;
    }
    &-info {
        position: relative;
        margin: 90rem 18rem 0 18rem;
        background: $bgColor;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.08);
        border-radius: 8px;
        &-img {
            position: absolute;
            top: -47rem;
            left: 50%;
            transform: translateX(-50%);
            width: 94px;
            height: 94px;
            border-radius: 50%;
            z-index: 100;
        }
        &-name {
            // position: absolute;
            // top: 59rem;
            padding-top: 59rem;
            font-size: 24px;
            color: #262628;
            text-align: center;
        }
        &-id {
            margin: 2px 0 12px 0;
            font-size: 14px;
            color: #c1c0c9;
            text-align: center;
        }
    }
    &-grade {
        position: absolute;
        top: 65px;
        right: 26px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 6px;
        width: 40px;
        height: 15px;
        background-image: linear-gradient(180deg, #bee700 0%, #8aca00 100%);
        border-radius: 7.5px;
        &-icon {
            margin-right: 2px;
            width: 15px;
            height: 15px;
            font-size: 7px;
            line-height: 15px;
            text-align: center;
            color: #ffc700;
            border-radius: 50%;
            background: rgba(0, 0, 0, 0.2);
        }
        &-number {
            font-size: 10px;
            color: #262628;
        }
    }
    &-property {
        display: flex;
        padding-left: 0;
        text-align: center;
        border-top: 1px solid #f1f1f1;
        &-title {
            font-size: 12px;
            color: #c1c0c9;
            margin-top: 12px;
        }
        &-number {
            margin: 3px 0 16px 0;
            font-size: 20pxpx;
            color: #666;
        }
        li {
            flex: 1;
        }
    }
}
</style>