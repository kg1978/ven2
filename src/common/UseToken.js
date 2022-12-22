import { useState } from 'react';

import localStoreHandler from './LocalStoreHandler';

export default function useToken() {
    const getToken = () => {
        console.log("useToken getToken start");
        const tokenString = localStoreHandler.getUserToken();
        console.log("useToken getToken tokenString: " + tokenString);
        const userToken = JSON.parse(tokenString);
        console.log("useToken getToken userToken: " + userToken);
        return userToken;
    };

    const token = useState(getToken());

    return token;
}