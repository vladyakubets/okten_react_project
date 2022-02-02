import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={"cards"} style={{flexWrap: 'unset', justifyContent: 'space-around', padding: '15px'}}>
            <NavLink to={"cars"} className={"card"}>CARS</NavLink>
            <NavLink to={"users"} className={"card"}>USERS</NavLink>
            <NavLink to={"posts"} className={"card"}>POSTS</NavLink>
            <NavLink to={"comments"} className={"card"}>COMMENTS</NavLink>
        </div>
    );
};

export {Header};