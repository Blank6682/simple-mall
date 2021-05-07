<template>
    <div class="user">
        <div class="user-bg"></div>
        <span class="user-edit iconfont">&#xea85;</span>
        <div class="user-info">
            <img
                class="user-info-img"
                src="https://ccp-bj29-bj-1592982087.oss-cn-beijing.aliyuncs.com/pds%2Favatar%2F33717d343da64de18889d6b3108b47c3?x-oss-access-key-id=LTAIsE5mAn2F493Q&x-oss-expires=1620376923&x-oss-signature=37267HoCPDoCwdUHKsdzRFNrxhrYCU9%2BiaaafiX4Qkg%3D&x-oss-signature-version=OSS2"
                alt=""
            />
            <div class="user-info-name">热心市民李先生</div>
            <div class="user-grade">
                <div class="user-grade-icon iconfont">&#xe619;</div>
                <span class="user-grade-number">16</span>
            </div>
            <p class="uesr-info-id">ID:1069643013</p>
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
export default {
    name: "PersonalInfo"
}
</script>

<style lang="scss" scoped>
@import "../../style/viriablles.scss";
.user {
    // &-bg {
    //     position: absolute;
    //     top: -400px;
    //     left: -110px;
    //     width: 600px;
    //     height: 600px;
    //     border-radius: 50%;
    //     background-image: linear-gradient(239deg, #3a6ff3 0%, #50c7fb 100%);
    // }
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 59px;
    background-color: #eee;
    &-edit {
        position: absolute;
        top: 40px;
        right: 21px;
        color: #eee;
        font-size: 20rem;
    }
    &-info {
        position: relative;
        margin: 0 18rem 0 18rem;
        margin-top: 90px;
        background: $bgColor;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.08);
        border-radius: 8px;
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
            position: absolute;
            top: 59rem;
            display: flex;
            font-size: 24px;
            color: #262628;
            text-align: center;
        }
    }
    &-grade {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35px;
        height: 15px;
        background-image: linear-gradient(180deg, #bee700 0%, #8aca00 100%);
        border-radius: 7.5px;
        &-icon {
            margin-right: 1px;
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
            color: $bgColor;
        }
    }
    &-property {
        display: flex;
    }
}
</style>