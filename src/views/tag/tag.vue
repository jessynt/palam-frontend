<template>
    <section>
        <loading v-if="isLoading"></loading>
        <div class="archive" v-if="!isLoading">
            <h2 class="title">{{ tag.name }}</h2>
            <div class="post-item" v-for="post in tag.posts.data">
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
        name: 'tag',
        computed: {
            ...mapState({
                tag: state => state.tag.tag,
                tagName: state => state.route.params.tagName,
                isLoading: state => state.tag.isLoading
            })
        },
        methods: {
            ...mapActions(['getTag'])
        },
        created() {
            this.getTag({tagName: this.tagName, router: this.$router});
        }
    }
</script>