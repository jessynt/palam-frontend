<template>
    <section>
        <loading v-if="isLoading"></loading>
        <div class="archive" v-for="index in Object.keys(archives).sort().reverse()" v-if="!isLoading">
            <h2 class="title">{{ index }}</h2>
            <div class="post-item" v-for="post in archives[index]">
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
        name: 'archives',
        computed: {
            ...mapState({
                archives: state => state.archives.archives,
                isLoading: state => state.archives.isLoading
            })
        },
        methods: {
            ...mapActions(['getArchives'])
        },
        created() {
            this.getArchives();
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    .archive {
        line-height: 1.8;
        margin: 3em auto;
        max-width: 720px;
        .title {
            margin: 20px 0;
            font-size: 2.8rem;
            font-weight: 400;
            font-family: Athelas, Times New Roman, STHeiti, Microsoft Yahei, serif;;
        }
        .post-item {
            padding: 2px 10px;
            border-left: 1px solid #9e9e9e;
            .post-title-link {
                font-size: 1.6rem;
                color: #F03838;
            }
            &:hover {
                padding-left: 13px;
                border-left: 3px solid #F03838;
                transition: 0.2s ease-out;

                .post-time {
                    color: darken(#9e9e9e, 10%);
                }
            }
        }
        .post-time {
            display: inline-block;
            font-size: 1.23rem;
            margin: 0 10px;
            color: #9e9e9e;
        }
    }

    @media screen and (max-width: 800px) {
        .archive {
            width: 100%;
        }
    }
</style>