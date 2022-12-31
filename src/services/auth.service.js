import axios from 'axios';
import localStoreHandler from '../common/LocalStoreHandler';

const API_URL = "http://localhost:8080/api/service-auth/signin";

const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Private-Network": "true",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*"
};

class AuthService {
    login(username, password) {
        return axios
            .post(API_URL, { username, password }, { headers } )
        .then(response => {
            if (response.data) {
                const json = JSON.stringify(response.data);
                console.log(json);
                const myObj = JSON.parse(json);
                console.log(myObj.token);
                localStoreHandler.setUserToken(myObj.token);
            }
        });
    }

    logout() {
        console.log("AuthService logout");
        localStorage.clear();

        //localStoreHandler.removeUserToken();
        //localStoreHandler.removeMenu();
        //localStoreHandler.removeUserData();
    }
}

export default new AuthService();
