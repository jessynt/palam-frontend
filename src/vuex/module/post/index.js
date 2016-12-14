import mutations from "./mutations";
import actions from './actions';

export default {
    state: {
        post: {},
        slug: '',
        isLoading: false
    },
    actions,
    mutations
};