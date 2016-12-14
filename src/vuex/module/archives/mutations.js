import {GET_ARCHIVES, RECEIVE_ARCHIVES} from './mutation_types';


export default {
    [GET_ARCHIVES](state = {}) {
        state.isLoading = true;
    },

    [RECEIVE_ARCHIVES](state = {}, mutation) {
        state.isLoading = false;
        window.test = mutation.payload.data;
        mutation && (state.archives = mutation.payload.data);
    }
};