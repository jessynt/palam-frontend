import httpFetch, * as FetchService from './FetchService';
const API_URL = '/api/post/archive';

export default class ArchivesService {
    queryArchives() {
        return httpFetch(FetchService.generatorUrl(API_URL));
    }
}
