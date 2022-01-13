import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import User from "../User/User";
import UserDetails from "../UserDetails/UserDetails";
import Post from "../Post/Post";

const Users = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        userService.getAll().then(value => setUsers(value))
    }, [])

    const getUser = (user) => {
        setUser(user)
    }
    const getPostsById = (id) => {
        userService.getPostsById(id).then(value => setPosts(value))
    }
    return (
        <div>
            <div style={{display: "flex", justifyContent: "space-around"}}>
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
            <hr/>
            <div style={{marginTop: "15px"}}>
                {
                    posts.map(value => <Post key={value.id} post={value}/>)
                }
            </div>
        </div>

    );
};

export default Users;