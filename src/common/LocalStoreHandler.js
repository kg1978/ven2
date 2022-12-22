const LocalStoreHandler = {
    setMenu(value) {
        localStorage.setItem("menu", value);
    },
    getMenu() {
        return JSON.parse(localStorage.getItem('menu'));
    },
    removeMenu() {
        localStorage.removeItem("menu");
    },

    setUserToken(value) {
        localStorage.setItem("token", value);
        console.log("LocalStoreHandler.setUserToken:" + value);
    },
    getUserToken() {
        return localStorage.getItem('token');
    },
    removeUserToken() {
        localStorage.removeItem("token");
        console.log("LocalStoreHandler.removeUserToken: token");
    }, 

    setUserData(value) {
        localStorage.setItem("data", value);
        console.log("LocalStoreHandler.setUserData:" + value);
    },
    getUserData() {
        return localStorage.getItem('data');
    },
    removeUserData() {
        localStorage.removeItem("data");
        console.log("LocalStoreHandler.removeUserData: data");
    }
};

export default LocalStoreHandler;
