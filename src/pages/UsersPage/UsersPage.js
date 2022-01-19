import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import "./UsersPage.css"
import {usersService} from "../../services";
import {User} from "../../components";

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        usersService.getAll().then(value => setUsers(value))
    },[])
    return (
        <div className="users">
            <div>{users.map(user => <User key={user.id} user={user}/>)}</div>
            <Outlet/>

        </div>
    );
};

export {UsersPage};