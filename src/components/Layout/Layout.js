import React from 'react';
import {Outlet} from 'react-router-dom';

import './Layout.css'
import {Header} from '../Header/Header';
import {useDispatch} from "react-redux";
import {setSearchIsOpened} from "../../store";

const Layout = ({switchTheme, theme}) => {
    const dispatch = useDispatch();
    return (
        <div>
            <Header switchTheme={switchTheme} theme={theme}/>
            <div className={'main'} onClick={()=> dispatch(setSearchIsOpened({isOpened: false}))}><Outlet/></div>
        </div>
    );
};

export {Layout};