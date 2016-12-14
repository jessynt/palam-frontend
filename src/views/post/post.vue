<template>
    <section>
        <loading v-if="isLoading"></loading>
        <post-component :post="post" v-if="!isLoading" :index="false"></post-component>
        <disqus v-if="!isLoading"></disqus>
    </section>
</template>
<script>
    import Vue from 'vue';
    import {mapState, mapActions} from 'vuex';

    export default{
        name: 'post',
        computed: {
            ...mapState({
                post: state => state.post.post,
                slug: state => state.route.params.slug,
                isLoading: state => state.post.isLoading
            }),
        },
        methods: {
            ...mapActions(['getPost'])
        },
        created() {
            this.getPost({slug: this.slug, router: this.$router});
        }
    }
</script>