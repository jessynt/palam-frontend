import httpFetch, * as FetchService from './FetchService'

const API_URL = process.env.API_URL + '/api/post';

export default class PostService {
    static queryPostList({current_page} = {}) {
        const QUERY_POST_LIST = {page: current_page};
        return httpFetch(FetchService.generatorUrl(API_URL, QUERY_POST_LIST));
    }

    static getPostBySlug(slug) {
        return httpFetch(FetchService.generatorUrl(API_URL + `/${slug}`));
    }
}