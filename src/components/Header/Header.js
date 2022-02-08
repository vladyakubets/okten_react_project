import React from "react";

import "./Header.css"
import {UserInfo} from "../UserInfo/UserInfo";
import {ToggleButton} from "../ToggleButton/ToggleButton";

const Header = ({switchTheme,theme}) => {
    return (
        <div className={"header"}>
            <ToggleButton switchTheme={switchTheme} theme={theme}/>
            <UserInfo/>
        </div>
    );
};

export {Header};