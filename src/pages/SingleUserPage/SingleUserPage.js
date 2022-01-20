import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import "./SingleUserPage.css"
import {usersService} from "../../services";

const SingleUserPage = () => {
    const {state} = useLocation();
    const {id: userId} = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (state) {
            setUser(state)
            return
        }
        usersService.getById(userId).then(value => setUser({...value}))
    }, [userId])

    return (
        <div className="single-user">
            <div>{
                user && <ul>
                    <li>{user.name}</li>
                    <li>{user.email}</li>
                    <li>{user.phone}</li>
                </ul>
            }
                <Link to={'posts'}>
                    <button>Show posts</button>
                </Link>
            </div>
            <Outlet/>
        </div>
    );
};

export {SingleUserPage};