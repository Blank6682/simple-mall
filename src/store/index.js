import { createStore } from 'vuex'

export default createStore({
    state: {
        myName: "blank"
    },
    mutations: {
        changeName (state) {
            state.myName = "zro"
        }
    },
    actions: {
        getData () {
            setTimeout(() => {
                this.commit('changeName')
            }, 2000);
        }
    },
    modules: {
    }
})
