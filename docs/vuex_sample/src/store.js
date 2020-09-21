import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: { //コンポーネントでいうdata
        count: 0,
        message: '初期メッセージ',
    },
    getters: { //stateを取得するための算出データ
        currentCount(state, getters, rootState, rootGetter) {
            return state.count
        },
        currentMessage(state) {
            return state.message
        },
        max(state) {
            return state.list.reduce((a, b) => {
                return a > b.price ? a : b.price
            }, 0)
        },
    },
    mutations: { //stateを変更できる唯一のメソッド
        increment(state) {
            state.count++;
        },
        mutationType(state, payload) {
            state.count = payload;
        },
        setMessage(state, payload) {
            state.message = payload.message
        }
    },
    actions: { //非同期処理を含めることができる
        actionType(context) {
            context.commit('mutationType', 10)
        },
        doUpdate(context, message) {
            context.commit('setMessage', {message})
        }
    }
})
export default store