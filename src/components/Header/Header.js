import React from 'react';
import {NavLink} from "react-router-dom";

import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <NavLink to="/">Episodes</NavLink>
            <a href="https://www.instagram.com/p/CN0OcZDLwOu/" target="_blank"><span>@Vlad_Yakubets</span></a>

        </div>
    );
};

export {Header};