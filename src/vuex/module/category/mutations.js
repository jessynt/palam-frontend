import {GET_CATEGORY, RECEIVE_CATEGORY} from './mutation_types';

export default {
    [GET_CATEGORY](state = {}) {
        state.isLoading = true;
    },

    [RECEIVE_CATEGORY](state = {}, mutation) {
        state.isLoading = false;
        mutation && (state.category = mutation.payload.data);
    }
};