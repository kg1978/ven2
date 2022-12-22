import axios from "axios";

import authHeader from './Auth-header';
import localStoreHandler from '../common/LocalStoreHandler';

const API_URL = "http://localhost:8080/api/service-menu/";

/**
 * A localStorage alatt a "menu" kulccsal elt�roljuk a user-hez tartoz� men�t, 
 * miut�n a Login-t k�vet�en let�lt�tt�k. 
 */
class MenuService {
    loadMenu() {
        return axios
            .get(API_URL + "menu", { headers: authHeader() })
            .then(response => {
                if (response.data) {
                    localStoreHandler.setMenu(JSON.stringify(response.data));
                }
            });
    }
}

export default new MenuService();