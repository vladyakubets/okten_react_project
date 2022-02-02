import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {getUsers} from "../../store";
import {User} from "../../components";

const UsersPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {users, status, error} = useSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    useEffect(() => {
        if (error) {
            navigate('/error')
        }
    }, [error])

    return (
        <div>
            {
                status === "pending" && <h2>Loading...</h2>
            }
            <div className={"cards"}>{
                users.map(user => <User key={user.id} user={user}/>)
            }</div>
        </div>
    );
};

export {UsersPage};