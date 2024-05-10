//創建store

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

//actions用於響應組件中的動作
const actions = {
    // add:function(context,value){
    //     context.commit('ADD',value);
    // },
    // minus:function(context,value){
    //     context.commit('MINUS',value);
    // },
    addOdd: function (context, value) {
        if (context.state.sum % 2) {
            context.commit('ADD', value);
        }
    },
    addWait: function (context, value) {
        setTimeout(() => {
            context.commit('ADD', value);
        }, 500);
    }
};

//mutations用於操作數據(state)
const mutations = {
    ADD: function (state, value) {
        state.sum += value;
    },
    MINUS: function (state, value) {
        state.sum -= value;
    }
};

//state是用於存儲數據
const state = {
    sum: 0,
};

const getters = {
    bigSum(state) {
        return state.sum * 10;
    }

}
//創建store並導出
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
});

