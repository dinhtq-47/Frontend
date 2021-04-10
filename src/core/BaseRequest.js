const axios = require('axios');
import config from '@/config.js';
let dataUser = window.localStorage.getItem('user');
let user = null;
if(dataUser) {
    user = JSON.parse(dataUser);
}
class BaseRequest {

    _getHeaders() {
        let headers = {}; 
        if(user !== null) {
            headers.Authorization = 'Bearer ' + user.token;
        } 
        return headers;
    }

    get(url) {
        return Promise( (resolve, reject) => {
            axios.get(
                config.API_URL,
                '/' + url, 
                {
                    headers: this._getHeaders()
                }
                
            )
            .then( response => {
                resolve(response.data);
            })
            .catch( error => {
                reject(error);
            })
        })
    }

    post(url, data) {
        return new Promise( (resolve, reject) => {
            axios.post(
                config.API_URL + '/' + url,
                data,
                {
                    headers: this._getHeaders()
                }
            )
            .then( response => {
                resolve(response.data);
            })
            .catch( error => {
                reject(error);
            })
        })
    }
}

export default new BaseRequest