<template>
    <footer>
        <p class="site-info">
            Powered by <a href="https://github.com/jessynt/palam" target="_blank" rel="noopener">Palam</a> and theme by
            <a href="https://github.com/CodeDaraW/Hacker" target="_blank" rel="noopener">Hacker</a>
            <br>
            © 2016 - 2017 - Jessynt
        </p>
        <label v-text="$t('lang.switch')"></label>
        <select v-model="selected" @change="switchLanguage">
            <option v-for="(value, key) in languages" :value="key" v-text="value"></option>
        </select>
    </footer>
</template>
<script>
    import Vue from 'vue'
    import setLocale from '../../i18n'
    import {languages} from '../../i18n/locales'
    import Cookie from 'js-cookie'

    export default  {
        data(){
            return {
                languages,
                selected: ''
            }
        },
        computed: {
            active () {
                return Vue.config.lang;
            }
        },
        methods: {
            switchLanguage(){
                setLocale(this.selected);
                Cookie.set('lang', this.selected);
                // Scroll to the top
                window.scrollTo(0, 0)
            }
        },
        created () {
            this.selected = this.active;
        }
    };
</script>
<style lang="scss" rel="stylesheet/scss">
    footer {
        position: relative;
        text-align: center;
        line-height: 1.8;
        padding-top: 1rem;
        color: #9e9e9e;
        a {
            color: #f03838;
        }
        .site-info {
            color: #9e9e9e;
            font-size: 1.3rem;
            margin: 0.5rem 0;
        }
    }
</style>
