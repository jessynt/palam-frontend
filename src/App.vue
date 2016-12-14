<template>
    <div class="blog">
        <div class="wrapper">
            <page-header></page-header>
            <main>
                <router-view></router-view>
            </main>
            <page-footer></page-footer>
        </div>
    </div>
</template>
<style lang="scss" rel="stylesheet/scss">
    @import "sass/highlight";
    .blog {
        max-width: 1170px;
        min-height: 100vh;
        background-color: #fff;
        margin: 0 auto;
        .wrapper {
            box-sizing: border-box;
            max-width: 770px;
            width: 100%;
            padding: 80px 10px 10px;
            margin: 0 auto;
        }
    }

    @media (max-width: 768px) {
        .wrapper {
            padding-top: 20px !important
        }
    }
</style>
<script>
    import Vue from 'vue';
    export default {
        name: 'app'
    };
</script>