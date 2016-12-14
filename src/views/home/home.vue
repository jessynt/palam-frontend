<template>
    <section>
        <loading v-if="isLoading"></loading>
        <post-component :post="post" v-for="post in posts.list" v-if="!isLoading" :index="true"></post-component>
        <pagination :pagination="posts.pagination" :callback="pageChanged" v-if="!isLoading"></pagination>
    </section>
</template>
<script>
    import Vue from 'vue';
    import {mapState, mapGetters, mapActions} from 'vuex';
    export default{
        name: 'home',
        computed: {
            ...mapState({
                isLoading: state => state.home.posts.isLoading
            }),
            ...mapGetters(['posts'])
        },
        methods: {
            ...mapActions(['loadPostList']),
            pageChanged(page){
                const query = {page: page};
                this.$router.push({ name: 'home', query });
            }
        },
        created () {
            this.loadPostList(parseInt(this.$route.query.page) || 1);
        },
        watch: {
            '$route': function (route) {
                this.loadPostList(parseInt(route.query.page) || 1);
            }
        }
    }
</script>