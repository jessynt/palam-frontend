import {GET_ARCHIVES, RECEIVE_ARCHIVES} from './mutation_types';
import {createAction} from '../../helpers';
import ArchivesService from '../../../common/services/ArchivesService';

const getArchives = ({commit, router}) => {
    commit(GET_ARCHIVES);
    new ArchivesService().queryArchives()
        .then(result => commit(createAction(RECEIVE_ARCHIVES, result)))
        .catch(err => {
            router.replace('/');
        });
};

export default {getArchives};