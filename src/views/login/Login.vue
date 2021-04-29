<template>
    <div class="wraper">
        <div class="login">
            <img
                class="login-icon"
                src="http://www.dell-lee.com/imgs/vue3/超市.png"
            />
            <input type="number" placeholder="请输入手机号" v-model="mobile" />
            <input
                type="password"
                placeholder="请输入密码"
                v-model="password"
            />
            <div class="login-btn" @click="handleLogin">登录</div>
            <div class="login-link" @click="handleRegisterClick">立即注册</div>
        </div>
        <Toast v-if="isShow" :message="toastMessage" />
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast.vue';

//处理登录逻辑
const useLoginEffect = (showToast) => {
    const router = useRouter();
    const data = reactive({
        mobile: '',
        password: '',
    })
    const handleLogin = async () => {
        try {
            const result = await post('/api/user/login', {
                username: data.mobile,
                password: data.password
            })
            if (result?.errno === 0) {
                localStorage.isLogin = true;
                //通过push方法实现路由跳转
                router.push({ name: "Home" })
            } else {
                showToast("登录失败")
            }
        } catch (e) {
            showToast("请求失败")
        }
    };
    const { mobile, password } = toRefs(data)
    return { mobile, password, handleLogin }
}

//处理注册跳转逻辑
const useRegisterEffec = () => {
    //路由实例化
    const router = useRouter();
    const handleRegisterClick = () => {
        router.push({ name: 'Register' })
    }
    return { handleRegisterClick }
}
export default {
    name: 'Login',
    components: {
        Toast
    },

    // 职责就是告诉你，代码执行的一个流程
    setup () {
        const { isShow, toastMessage, showToast } = useToastEffect()
        const { mobile, password, handleLogin } = useLoginEffect(showToast)
        const { handleRegisterClick } = useRegisterEffec()

        return {
            mobile, password, toastMessage, isShow,
            handleLogin, handleRegisterClick,
        }
    }

}
</script>

<style lang="scss" scoped>
@import "../../style/viriablles.scss";
.login {
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
        width: 56rem;
        padding-right: 12rem;
        margin: 0 auto;
        color: $content-notice-fontColor;
        border-right: 1rem solid rgba($color: #000000, $alpha: 0.5);
    }
    input {
        display: block;
        width: 279rem;
        margin: 16rem auto;
        padding-left: 16rem;
        font-size: 16rem;
        line-height: 48rem;
        color: $content-notice-fontColor;
        background-color: #f9f9f9;
        border-radius: 6rem;
        border: 1rem solid rgba($color: #000000, $alpha: 0.1);
        outline-color: $btn-bgColor;
        // 去除type=number时的上下箭头
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            -webkit-appearance: none;
        }
    }
    input[type="number"] {
        -moz-appearance: textfield;
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
    &-btn:hover {
        background-color: rgba(0, 145, 255, 0.9);
        box-shadow: 0 4rem 8rem 3rem rgba(0, 145, 255, 0.32);
    }
}
</style>