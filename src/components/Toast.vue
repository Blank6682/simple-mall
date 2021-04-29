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
        isShow: false
    })
    const showToast = (msg) => {
        toastData.isShow = true
        toastData.toastMessage = msg
        setTimeout(() => {
            toastData.isShow = false
        }, 1500)
    }
    const { toastMessage, isShow } = toRefs(toastData)
    return { showToast, toastMessage, isShow }
}
</script>

<style lang="scss" scoped>
@import "../style/viriablles.scss";
.toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 8px 10px;
    color: $content-notice-fontColor;
    border-radius: 4px;
    background-color: #ccc;
    box-shadow: 1px 1px 4px 1px $content-notice-fontColor;
}
</style>