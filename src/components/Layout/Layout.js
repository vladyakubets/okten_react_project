import React from "react";
import {Outlet} from "react-router-dom";

import "./Layout.css"
import {Header} from "../Header/Header";

const Layout = ({switchTheme, theme}) => {
    return (
        <div>
            <Header switchTheme={switchTheme} theme={theme}/>
            <div className={"main"}><Outlet/></div>
        </div>
    );
};

export {Layout};