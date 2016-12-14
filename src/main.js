import Vue from 'vue'
import store from './vuex'
import router from './router/router'
import {sync} from 'vuex-router-sync'
import setLocale from './i18n'
import Hljs from './common/syntax'
import App from './App'
import filter from './utils/filter'
import './components'
// icon
import 'assets/js/iconfont'

filter(Vue);
setLocale('zh-CN');
sync(store, router);

Vue.directive('highlightjs', {
    inserted: function (el) {
        let blocks = el.querySelectorAll('pre code');
        Array.prototype.forEach.call(blocks, Hljs.highlightBlock);
    }
});

new Vue({
    router,
    store,
    ...App
}).$mount('#app');