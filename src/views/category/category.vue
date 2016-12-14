<template>
    <section>
        <loading v-if="isLoading"></loading>
        <div class="archive" v-if="!isLoading">
            <h2 class="title">{{ category.name }}</h2>
            <div class="post-item" v-for="post in category.posts.data">
                <div class="post-time">{{ post.created_date }}</div>
                <router-link class="post-title-link" :to="{ name: 'post', params: {slug:post.slug }}">
                    {{ post.title }}
                </router-link>
            </div>
        </div>
    </section>
</template>
<script>
    import {mapState, mapActions} from 'vuex';
    export default{
        name: 'category',
        computed: {
            ...mapState({
                category: state => state.category.category,
                categoryName: state => state.route.params.categoryName,
                isLoading: state => state.category.isLoading
            })
        },
        methods: {
            ...mapActions(['getCategory'])
        },
        created() {
            this.getCategory({categoryName: this.categoryName, router: this.$router});
        }
    }
</script>