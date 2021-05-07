<template>
    <div class="toast">{{ message }}</div>
</template>

<script>
import { reactive, toRefs } from "vue"

export default {
    name: "Toast",
    props: { message: String },
}

export const useToastEffect = () => {
    const toastData = reactive({
        toastMessage: '',
        isShowToast: false
    })
    const showToast = (msg) => {
        toastData.isShowToast = true
        toastData.toastMessage = msg
        setTimeout(() => {
            toastData.isShowToast = false
        }, 1500)
    }
    const { toastMessage, isShowToast } = toRefs(toastData)
    return { showToast, toastMessage, isShowToast }
}
</script>

<style lang="scss" scoped>
@import "../style/viriablles.scss";
.toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 8rem 10rem;
    color: $content-notice-fontColor;
    border-radius: 8rem;
    background-color: $bgColor;
    box-shadow: 1rem 1rem 4rem 1rem $content-notice-fontColor;
}
</style>