<template>
    <div class="wraper">
        <div class="register">
            <img
                class="register-icon"
                src="http://www.dell-lee.com/imgs/vue3/超市.png"
            />
            <input type="tel" placeholder="请输入手机号" />
            <input type="password" placeholder="请输入密码" />
            <input type="password" placeholder="确认密码" />
            <div class="register-btn" @click="handleRegister">注册</div>
            <div class="register-link" @click="handleLoginClick">
                已有账号去登陆
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'

const useRegisterEffec = () => {
    const router = useRouter();
    const handleRegister = () => {
        router.push({ name: 'Login' })
    }
    const handleLoginClick = () => {
        router.push({ name: 'Login' })
    }
    return { handleRegister, handleLoginClick }
}
export default {
    name: 'Register',
    setup () {
        const { handleRegister, handleLoginClick } = useRegisterEffec()
        return { handleRegister, handleLoginClick }
    }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriablles.scss";
.register {
    position: absolute;
    width: 100vw;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    &-icon {
        display: block;
        width: 66rem;
        height: 66rem;
        margin: 0 auto 24rem auto;
    }
    &-link {
        font-size: 14rem;
        width: 98rem;
        padding-right: 12rem;
        margin: 0 auto;
        color: rgba($color: #000000, $alpha: 0.5);
    }
    input {
        display: block;
        width: 279rem;
        margin: 16rem auto;
        padding-left: 16rem;
        font-size: 16rem;
        line-height: 48rem;
        color: rgba($color: #000000, $alpha: 0.5);
        background-color: #f9f9f9;
        border-radius: 6rem;
        border: 1rem solid rgba($color: #000000, $alpha: 0.1);
        outline-color: $btn-bgColor;
    }
    &-btn {
        display: block;
        width: 295rem;
        margin: 32rem auto 16rem auto;
        font-size: 16rem;
        line-height: 48rem;
        text-align: center;
        color: $bgColor;
        background: $btn-bgColor;
        box-shadow: 0 4rem 8rem 0 rgba(0, 145, 255, 0.32);
        border: none;
        border-radius: 4rem;
        border-radius: 4rem;
        outline-color: $btn-bgColor;
    }
}
</style>