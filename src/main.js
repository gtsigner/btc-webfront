import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import i18n from './locale'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//import 'iview/dist/styles/iview.css';

import './assets/scss/app.scss';
import * as dayjs from 'dayjs';

Vue.use(ElementUI);
Vue.config.productionTip = false;


Vue.filter('formatDate', (timestamp, formatStr) => {
    return dayjs(timestamp * 1000)
        .format(formatStr || 'YYYY-MM-DD HH:mm');
});


Vue.filter('dateString2Date', (time, formatStr) => {
    return dayjs(time * 1000)
        .format(formatStr || 'YYYY-MM-DD');
});

Vue.filter('time2DateTime', (time, formatStr) => {
    return dayjs(time * 1000)
        .format(formatStr || 'YYYY-MM-DD HH:mm:ss');
});

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');
