import {API_URL} from "../../config";
export const generatorUrl = (url = '', params = '') =>
    params ? url + '?' + generatorQueryString(params) : url;

export const generatorQueryString = params => {
    return typeof params === 'object'
        ? Object.keys(params).map(key => key + '=' + JSON.stringify(params[key])).join('&')
        : params;
};

export const statusHandler = response => {
    if (response.ok) {
        return Promise.resolve(response);
    }
    return Promise.reject(`${response.status} ${new Error(response.statusText)}`);
};

export const parseAsJson = response => response.json();

const httpFetch = (url, options) => fetch(API_URL + url, options)
    .then(statusHandler)
    .then(parseAsJson);

export default httpFetch;
