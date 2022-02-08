import React from 'react';
import {NavLink} from 'react-router-dom';

import './Header.css'
import {UserInfo} from '../UserInfo/UserInfo';
import {ToggleButton} from '../ToggleButton/ToggleButton';

const Header = ({switchTheme, theme}) => {
    return (
        <div className={'header'}>
            <ToggleButton switchTheme={switchTheme} theme={theme}/>
            <div className={'nav-bar'}>
                <NavLink to={'/movies'}>movies</NavLink>
                <NavLink to={'/genres'}>genres</NavLink>
            </div>
            <UserInfo/>
        </div>
    );
};

export {Header};