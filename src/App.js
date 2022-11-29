import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import EventBus from "./common/EventBus";
import AuthService from "./services/auth.service";

import Login from "./components/ven/login.component";

import { Routes, Route } from 'react-router-dom';
import About from './routes/About';
import WebDesign from './routes/WebDesign';
import SEO from './routes/SEO';
import Services from './routes/Services';
import Layout from './components/Layout';
import Frontend from './routes/Frontend';
import PHP from './routes/PHP';
import Node from './routes/Node';
import AboutWho from './routes/AboutWho';
import OurValues from './routes/OurValues';
import WebDev from './routes/WebDev';

class App extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            showAdminBoard: false,
            currentUser: undefined,
        };
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if (user) {
            this.setState({
                currentUser: user,
                showAdminBoard: user.roles.includes("ROLE_ADMIN"),
            });
        }

        EventBus.on("logout", () => {
            this.logOut();
        });
    }

    componentWillUnmount() {
        EventBus.remove("logout");
    }

    logOut() {
        AuthService.logout();
        this.setState({
            showAdminBoard: false,
            currentUser: undefined,
        });
    }

    render() {
        const { currentUser, showAdminBoard } = this.state;
        return (
            <>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Login />} />
                        <Route path="about" element={<About />} />
                        <Route path="services" element={<Services />} />
                        <Route path="web-design" element={<WebDesign />} />
                        <Route path="web-dev" element={<WebDev />} />
                        <Route path="frontend" element={<Frontend />} />
                        <Route path="node" element={<Node />} />
                        <Route path="seo" element={<SEO />} />
                        <Route path="php" element={<PHP />} />
                        <Route path="who-we-are" element={<AboutWho />} />
                        <Route path="our-values" element={<OurValues />} />
                        <Route path="*" element={<p>Not found!</p>} />
                    </Route>
                </Routes>
            </>
        );
    }
};

export default App;