import Vue from 'vue'
import store from './vuex'
import router from './router/router'
import {sync} from 'vuex-router-sync'
import setLocale from './i18n'
import {languages} from './i18n/locales'
import Hljs from './common/syntax'
import App from './App'
import filter from './utils/filter'
import Cookie from 'js-cookie'
import './components'
// icon
import 'assets/js/iconfont'
filter(Vue);

//TODO: Refactor
const browser_language = window.navigator.userLanguage || window.navigator.language;
const user_language = Cookie.get('lang');

if (user_language in languages) {
    setLocale(user_language);
} else if (browser_language in languages) {
    setLocale(browser_language);
} else {
    //default
    setLocale('en-US');
}

sync(store, router);

Vue.directive('highlightjs', {
    inserted: (el) => {
        let blocks = el.querySelectorAll('pre code');
        Array.prototype.forEach.call(blocks, Hljs.highlightBlock);
    }
});

new Vue({
    router,
    store,
    ...App
}).$mount('#app');
