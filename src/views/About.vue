<template>
    <div class="about">
        <h1>This is an about page</h1>
        <p @click="handleClick">{{ myName }}</p>
    </div>
</template>
<script >
import { toRefs } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
export default ({
    setup () {
        const store = useStore();
        const { myName } = toRefs(store.state);
        const handleClick = () => {
            // 异步
            store.dispatch('getData')
            // 同步
            // store.commit('changeName')
        }
        return { myName, handleClick }
    }
})
</script>
