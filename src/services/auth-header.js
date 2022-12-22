import localStoreHandler from '../common/LocalStoreHandler';

export default function authHeader() {
    const token = localStoreHandler.getUserToken();

    console.log("authHeader token: " + token);

    return {
        Authorization: 'Bearer ' + token,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Private-Network": "true",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*"}; 
}
