import * as types from "../mutations-types";

export default {
    state: {
        current: {},
        games: [

        ],
    },
    actions: {},
    mutations: {
        [types.SET_GAME](state, game) {
            state.current=game;
        }
    }
}
