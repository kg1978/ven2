import axios from "axios";

import authHeader from './Auth-header';
import localStoreHandler from '../common/LocalStoreHandler';
import {SERVER_URL} from '../common/Const';

const API_URL = SERVER_URL + "/api/service-menu/";

/**
 * A localStorage alatt a "menu" kulccsal eltároljuk a user-hez tartozó menüt, 
 * miután a Login-t követöen letöltötték. 
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