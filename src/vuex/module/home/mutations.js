import {QUERY_POSTS_LIST, RECEIVE_POSTS_LIST} from './mutation_types';

export default {

    [QUERY_POSTS_LIST](state = {}) {
        state.posts.isLoading = true;
    },

    [RECEIVE_POSTS_LIST](state = {}, mutation = {}) {
        state.posts.pagination = mutation.payload.result.meta.pagination;
        state.posts.list = mutation.payload.result.data;
        state.posts.isLoading = false;
    }
};