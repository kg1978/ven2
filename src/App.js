import React from "react";
import { Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import localStoreHandler from './common/LocalStoreHandler';
import Layout from "./components/menu/Layout";
import Login from "./components/common/Login.component";
import Logout from "./components/common/Logout.component";
import Download from "./components/common/Download.component";
import Home from './components/ven/Home.component';

import Kerelem from './components/ven/okmany/Kerelem.component';

function App() {
    console.log("App rendered");

    const usertoken = localStoreHandler.getUserToken();
    const userdata = localStoreHandler.getUserData();
    const domaindata = localStoreHandler.getDomainOk();
    
    if (!usertoken) {
        console.log("App No token");
        return <Login />
    }

    if (!userdata || !domaindata) {
        console.log("App No userdata or domaindata");
        return <Download />
    }

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="kijelentkezes" element={<Logout />} />
                    <Route path="kerelem-feldolg" element={<Kerelem />} />
                    <Route path="*" element={<p>A keresett oldal nem létezik!</p>} />
                </Route>
            </Routes>
        </>
    );
};

export default App;