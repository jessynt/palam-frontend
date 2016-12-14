import actions from './actions';
import mutations from './mutations';

export default {
    state: {
        posts: {
            list: undefined,
            pagination: undefined,
            isLoading: false
        }
    },
    getters: {
        posts: state => state.posts
    },
    actions,
    mutations
};
