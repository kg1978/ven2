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
                    console.log(response.data);
                    localStoreHandler.setUserData(JSON.stringify(response.data));
                    const menu = JSON.parse(localStoreHandler.getUserData()).menu;
                    localStoreHandler.setMenu(JSON.stringify(menu));
               }
            });
    }
}

export default new JogService();
