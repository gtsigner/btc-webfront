import * as types from './mutations-types';
import {setLang} from "../config";

export default {
    [types.SET_LOGIN](state, isLogin) {
        console.log(state);
        state.isLogin = isLogin;
    },
    [types.SET_ACCESS_TOKEN](state, accessToken) {
        state.accessToken = accessToken;
    },
    [types.SET_USER](state, user) {
        state.user = user;
    },
    [types.SET_LANG](state, lang) {
        setLang(lang.locale);
        state.lang = lang;
    }
};
