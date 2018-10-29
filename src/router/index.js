import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('../views/layout'),
            children: [
                {
                    path: '/',
                    name: 'home-main',
                    component: () => import('../views/home'),
                },
                {
                    path: 'lottery',
                    name: 'home-lottery',
                    component: () => import('../views/lottery'),
                },
                {
                    path: 'bonuses',
                    name: 'home-bonuses',
                    component: () => import('../views/bonuses'),
                },
                {
                    path: 'exchange',
                    name: 'home-exchange',
                    component: () => import('../views/exchange'),
                }
            ]
        },
    ],
});

//钩子声明周期
router.beforeEach((to, from, next) => {
    //store.commit('updateLoadingStatus', {isLoading: true});
    //LoadingBar.start();
    next();
});

router.afterEach(function (to) {
    //store.commit('updateLoadingStatus', {isLoading: false});
    //LoadingBar.finish();
});
export default router;
