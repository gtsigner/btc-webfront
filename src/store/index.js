import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import actions from './actions';
import mutations from './mutations';
import game from "./modules/game";

export default new Vuex.Store({
    state: {
        user: {
            username: 'godtoy'
        },
        isLogin: false,
        accessToken: null,
        lang: {},//当前语言
        //语言库
        langs: [
            {
                title: 'Simplified Chinese', locale: 'zh-CN', icon: 'china'
            },
            {
                title: 'English', locale: 'en-US', icon: 'usa'
            },
            // {
            //     title: 'Korea', locale: 'korea', icon: 'korea'
            // },
            // {
            //     title: 'Russia', locale: 'russia', icon: 'russia'
            // },
        ]
    },
    getters: {},
    mutations: mutations,
    actions: actions,
    modules: {
        game
    }
});
