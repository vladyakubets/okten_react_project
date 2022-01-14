import React, {useEffect, useState} from 'react';

import {userService} from "../../services/user.service";
import User from "../User/User";
import UserDetails from "../UserDetails/UserDetails";
import "./Users.css"

const Users = ({getPostsById}) => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)

    useEffect(() => {
        userService.getAll().then(value => setUsers(value))
    }, [])

    const getUser = (user) => {
        setUser(user)
    }

    return (
        <div>
            <div className="users_box">
                <div>
                    {
                        users.map(value => <User key={value.id} user={value} getUser={getUser}/>)
                    }
                </div>
                <div>
                    {
                        user && <UserDetails user={user} getPostsById={getPostsById}/>
                    }
                </div>


            </div>

        </div>

    );
};

export default Users;