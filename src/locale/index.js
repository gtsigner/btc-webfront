import Vue from 'vue'
import VueI18n from 'vue-i18n'
import {getLang, localRead, setLang} from '../config'
import customZhCn from './lang/zh-CN'
import customZhTw from './lang/zh-TW'
import customEnUs from './lang/en-US'
import zhCnLocale from 'iview/src/locale/lang/zh-CN'
import enUsLocale from 'iview/src/locale/lang/en-US'
import zhTwLocale from 'iview/src/locale/lang/zh-TW'
import Formatter from './formatter'

Vue.use(VueI18n);

// 自动根据浏览器系统语言设置语言
const navLang = navigator.language;
const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false;
let lang = getLang() || localLang || 'en-US';

console.log("CurrentLang:", lang);
Vue.config.lang = lang;
setLang('en-US');

const messages = {
    'zh-CN': Object.assign(zhCnLocale, customZhCn),
    'zh-TW': Object.assign(zhTwLocale, customZhTw),
    'en-US': Object.assign(enUsLocale, customEnUs)
};
const formatter = new Formatter({lang});
const i18n = new VueI18n({
    locale: lang,
    //formatter,
    messages
});

export default i18n

// vue-i18n 5.x写法
// Vue.locale('zh-CN', Object.assign(zhCnLocale, customZhCn))
// Vue.locale('en-US', Object.assign(zhTwLocale, customZhTw))
// Vue.locale('zh-TW', Object.assign(enUsLocale, customEnUs))
