import axios from 'axios';

import localStoreHandler from '../common/LocalStoreHandler';
import authHeader from './Auth-header';

const API_URL = 'http://localhost:8080/api/service-ven/jog/';

class JogService {

    init() {
        return axios
            .get(API_URL + 'init', { headers: authHeader()})
            .then(response => {
               if (response.data) {
                    localStoreHandler.setUserData(JSON.stringify(response.data));
               }
            });
    }
}

export default new JogService();
