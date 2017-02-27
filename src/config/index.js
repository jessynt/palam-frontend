const CONFIG = {
    'DevRoot': 'http://blog.dev',
    'root': 'https://blog.xxff.host'
};
let API_URL = process.env.NODE_ENV == 'production' ? CONFIG.root : CONFIG.DevRoot;

export {CONFIG, API_URL};
