import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import "./Layout.css"
import {Header, Footer} from "../../components";

const Layout = () => {
    return (
        <div>
            <Header/>
            <div className="main">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export {Layout};