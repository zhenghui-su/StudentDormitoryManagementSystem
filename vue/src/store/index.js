/*
 * @Author: suzhenghui 343196323@qq.com
 * @Date: 2023-12-02 20:05:53
 * @LastEditors: suzhenghui 343196323@qq.com
 * @Description: 容器
 */
import { createStore } from 'vuex'

export default createStore({
    state: {
        isLogin: false,
        identity: ''
    },
    mutations: {
        login(state) {
            state.isLogin = true
        }
    },
    actions: {},
    modules: {}
})
