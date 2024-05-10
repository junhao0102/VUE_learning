//創建store

import { name } from 'pubsub-js';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

//求和相關的配置
const countOptions = {
    namespaced: true,
    actions: {
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
    },
    mutations: {
        ADD: function (state, value) {
            state.sum += value;
        },
        MINUS: function (state, value) {
            state.sum -= value;
        }
    },
    state: {
        sum: 0,
        school: '尚硅谷',
        subject: 'vue',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10;
        }

    }
}

//人員相關配置
const personOptions = {
    namespaced: true,
    actions: {
        addPerson(context, personOBJ) {
            context.commit('ADDPERSON', personOBJ);
        }
    },
    mutations: {
        ADDPERSON(state, personOBJ) {
            state.personlist.unshift(personOBJ);
        }
    },
    state: {
        personlist: [
            { id: 1, name: '小明' }
        ]
    },
    getters:{}
}



//創建store並導出
export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions
    }
});

