<template>
    <article>
        <h3 class="article-title" v-if="index">
            <router-link :to="{ name: 'post', params: { slug: post.slug }}"><span>{{ post.title }}</span>
            </router-link>
        </h3>
        <h3 class="article-title" v-else><span>{{ post.title }}</span></h3>

        <div class="article-top-meta">
            <span class="posted-on">
                <time class="entry-date published" v-bind:datetime="post.created_at">
                    {{ post.created_date}}
                </time>
                </a>
            </span>
        </div>
        <div class="article-content wysiwyg">
            <div class="entry" v-html="post.description" v-if="post.description && index" v-highlightjs></div>
            <div class="entry" v-html="post.body" v-else v-highlightjs></div>
        </div>

        <div class="article-footer">
            <div class="article-meta pull-left">
                <span class="post-categories">
                  <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-cshy-classify-fill"></use>
                  </svg>
                    <router-link :to="{name: 'category', params: {categoryName: post.category.data.name}}">{{ post.category.data.name }}</router-link>
                </span>
                <span class="post-tags" v-if="post.tags.data.length !== 0">
                  <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-tagso"></use>
                  </svg>
                        <router-link v-for="tag in post.tags.data" :to="{name: 'tag', params: {tagName: tag.name}}">{{ tag.name }}</router-link>
                </span>
            </div>
        </div>
    </article>
</template>
<script>
    export default{
        name: 'post',
        props: ['post', 'index']
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    @import '../../sass/wysiwyg.sass';

    article {
        $hackerRed: #f03838;
        $hackerGray: #9e9e9e;
        $articleTitleColor: #212121;
        $articleTextColor: #424242;
        position: relative;
        padding: 8rem 0;
        a {
            color: $hackerRed;
        }
        &:not(:first-child):before {
            content: '';
            width: 150px;
            height: 1px;
            background-color: #e0e0e0;
            position: absolute;
            top: 0;
            left: 50%;
            margin-left: -75px;
        }
        blockquote {
            margin: 6rem 2rem;
            padding-left: 15px;
            line-height: 2rem;
            border-left: 4px solid $hackerRed;
        }
        .article-title {
            position: relative;
            color: $articleTitleColor;
            font-size: 2.4rem;
            line-height: 1.3;
            text-align: center;
            margin: 0;
            padding: 0 2rem;
            a {
                display: block;
                color: $articleTitleColor;
                span {
                    padding-bottom: 3px;
                    -webkit-transition: 0.15s;
                    transition: 0.15s;
                    box-shadow: inset 0 -2px 0 rgba(240, 56, 56, 0);
                    &:hover {
                        box-shadow: inset 0 -2px 0 rgba(240, 56, 56, 0.4);
                    }
                }
                &:hover {
                    color: $articleTitleColor;
                }
            }
        }
        .article-top-meta {
            position: relative;
            color: $hackerGray;
            font-size: 1.3rem;
            text-align: center;
            margin: 1rem 0;
            span {
                margin: 0 0.5rem;
            }
            a {
                color: $hackerGray;
                &:hover {
                    color: $hackerRed;
                }
                time {
                    font-style: italic;
                }
            }
        }
        .article-excerpt, .article-content {
            color: #333;
            font-size: 1.6rem;
            font-family: -apple-system, "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
            margin: 4rem 0;
        }
        .article-footer {
            .pull-left {
                float: left;
            }
            .pull-right {
                float: right;
            }
            &:after {
                content: " ";
                display: block;
                clear: both;
            }
            .article-meta {
                font-size: 1.3rem;
                counter-reset: $hackerGray;
                a {
                    color: $hackerGray;
                    &:hover {
                        color: $hackerGray;
                    }
                }
                svg.icon {
                    vertical-align: middle;
                    color: $hackerGray;
                    margin-right: 0.5rem;
                    width: 19px;
                    height: 16px;
                }
                span {
                    display: inline-block;
                    span {
                        line-height: 1;
                        vertical-align: middle;
                    }
                    &:not(:last-child) {
                        margin-right: 3rem;
                    }
                }
            }
            .post-tags {
                a {
                    &:before {
                        content: "#";
                    }
                    &:not(:last-of-type):after {
                        content: ",";
                        padding-right: 5px;
                    }
                }
            }
        }
        code {
            padding: 2px 4px;
            margin-left: 2px;
            margin-right: 2px;
            color: #c7254e;
            border-radius: 0;
        }

        p {
            margin: 2rem 0;
            line-height: 1.8;
        }
    }

    @media (max-width: 768px) {
        article {
            padding: 2.5rem 0 !important;
        }
    }
</style>
