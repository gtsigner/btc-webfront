import * as types from './mutations-types';

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
    }
};
