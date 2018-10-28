import {http} from '../services/api';
import * as types from './mutations-types';

export default {
    async login({commit, state}, user) {
        const res = await http.post('passport/login', user);
        if (res.ok) {
            commit(types.SET_LOGIN, true);
            commit(types.SET_ACCESS_TOKEN, res.data.token);
        }
        return res;
    },
    async profile({commit}) {
        const res = await http.post('user/profile');
        if (res.ok) {
            commit(types.SET_LOGIN, true);
            commit(types.SET_ACCESS_TOKEN, res.data.token);
            commit(types.SET_USER, res.data);
        }
        return res;
    }
};