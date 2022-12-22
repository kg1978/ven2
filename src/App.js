import React from "react";
import { Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import localStoreHandler from './common/LocalStoreHandler';
import Layout from "./components/menu/Layout";
import Login from "./components/common/Login.component";
import Download from "./components/common/Download.component";
import Home from './components/ven/Home.component';

function App() {

    const usertoken = localStoreHandler.getUserToken();
    const userdata = localStoreHandler.getUserData();

    if (!usertoken) {
        console.log("App No token");
        return <Login />
    }

    if (!userdata) {
        console.log("App No userdata");
        return <Download />
    }

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="*" element={<p>A keresett oldal nem létezik!</p>} />
                </Route>
            </Routes>
        </>
    );
};

export default App;