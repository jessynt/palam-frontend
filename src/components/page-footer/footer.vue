<template>
    <footer>
        <p class="site-info">
            Theme by <a href="https://github.com/CodeDaraW/Hacker" target="_blank" rel="noopener">Hacker</a>
            © 2016 Jessynt
        </p>
    </footer>
</template>
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
<script>
    import Vue from 'vue';
    export default Vue.component('page-footer', {});
</script>
