import {createAction} from '../../helpers';
import {GET_CATEGORY, RECEIVE_CATEGORY} from './mutation_types';
import CategoryService from "../../../common/services/CategoryService";

const getCategory = ({commit}, {categoryName, router}) => {
    commit(GET_CATEGORY);
    CategoryService.getCategoryByName(categoryName)
        .then(result => {
            if (result.data) {
                return result;
            } else {
                throw new Error('Tag not found!');
            }
        })
        .then(result => commit(createAction(RECEIVE_CATEGORY, result)))
        .catch(err => {
            router.replace('/');
        });
};

export default {getCategory};