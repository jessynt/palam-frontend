import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Post from '../views/post'
import Archives from '../views/archives'
import Tag from '../views/tag'
import Category from '../views/category'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/page/:page',
            name: 'page',
            component: Home
        },
        {
            path: '/post/:slug',
            name: 'post',
            component: Post
        },
        {
            path: '/archives',
            name: 'archives',
            component: Archives
        },
        {
            path: '/tag/:tagName',
            name: 'tag',
            component: Tag
        },
        {
            path: '/category/:categoryName',
            name: 'category',
            component: Category
        },
        {
            path: '*',
            redirect: '/'
        }
    ],
    scrollBehavior: () => ({y: 0})
});

router.afterEach(route => {
    console.info(`${new Date()}: ${route.path}`);
});

export default router;