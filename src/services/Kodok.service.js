import axios from 'axios';

import localStoreHandler from '../common/LocalStoreHandler';
import {SERVER_URL} from '../common/Const';
import authHeader from './Auth-header';

const API_URL = SERVER_URL + "/api/service-ven/kodok/";

class KodokService {

    init() {
        return axios
            .get(API_URL + 'domains', { headers: authHeader()})
            .then(response => {
               if (response.data) {
                    const json = response.data;    
                    for(var key in json) {
                        console.log("key: " + key);
                        localStoreHandler.setDomain(key, JSON.stringify(json[key]));
                    }
                }
            });
    }
}

export default new KodokService();
