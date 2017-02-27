import httpFetch, * as FetchService from './FetchService';

const API_URL = '/api/category';

export default class TagService {
    static getCategoryByName(categoryName) {
        const query = `include=posts`;
        return httpFetch(FetchService.generatorUrl(API_URL + `/${categoryName}`, query));
    }
}
