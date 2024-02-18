import { createStore } from 'vuex'

export default createStore({
    state: {
        count: 0
    },
    getters: {
        COUNT: state => {
            return state.count;
        }
    },
    actions: {
        ADD_COUNT: function(){
            this.state.count += 1;
        }
    }
});