import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';

import './Header.css'
import {UserInfo} from '../UserInfo/UserInfo';
import {SearchIcon} from "../../images";
import {SearchMovie} from "../SearchMovie/SearchMovie";
import {useDispatch, useSelector} from "react-redux";
import {setSearchIsOpened} from "../../store";

const Header = ({switchTheme, theme}) => {
    const dispatch = useDispatch();
    const {pathname} = useLocation();
    const {isOpened} = useSelector(state=> state.searchMovies);
    return (
        <div>
            <div className={'header'}>
                <div className={'nav-bar'}>
                    <NavLink to={'/movies'}>movies</NavLink>
                    <NavLink to={'/genres'}>genres</NavLink>
                </div>
                <div className={'search'}>
                    {(pathname === '/movies' && !isOpened) && <span onClick={() => dispatch(setSearchIsOpened({isOpened: true}))}><SearchIcon theme={theme}/></span>}
                </div>
                <UserInfo switchTheme={switchTheme} theme={theme}/>
            </div>
            {isOpened && <div className={'search-box'}>
                <SearchMovie isOpened={isOpened}/>
            </div>}
        </div>
    );
};

export {Header};