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
.register {
    position: absolute;
    width: 100vw;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    &-icon {
        display: block;
        width: 66px;
        height: 66px;
        margin: 0 auto 24px auto;
    }
    &-link {
        font-size: 14px;
        width: 98px;
        padding-right: 12px;
        margin: 0 auto;
        color: rgba($color: #000000, $alpha: 0.5);
    }
    input {
        display: block;
        width: 279px;
        margin: 16px auto;
        padding-left: 16px;
        font-size: 16px;
        line-height: 48px;
        color: rgba($color: #000000, $alpha: 0.5);
        background-color: #f9f9f9;
        border-radius: 6px;
        border: 1px solid rgba($color: #000000, $alpha: 0.1);
        outline-color: #0091ff;
    }
    &-btn {
        display: block;
        width: 295px;
        margin: 32px auto 16px auto;
        font-size: 16px;
        line-height: 48px;
        text-align: center;
        color: #fff;
        background: #0091ff;
        box-shadow: 0 4px 8px 0 rgba(0, 145, 255, 0.32);
        border: none;
        border-radius: 4px;
        border-radius: 4px;
        outline-color: #0091ff;
    }
}
</style>