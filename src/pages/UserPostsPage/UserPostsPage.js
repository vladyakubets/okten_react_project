import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import "./UserPostsPage.css"
import {usersService} from "../../services";

const UserPostsPage = () => {
    const [posts, setPosts] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        usersService.getPosts(id).then(value => setPosts(value))
    },[])
    console.log(posts);
    return (
        <div className="user-posts">
            {
                posts.map(post => <div key={post.id}>{post.id} - {post.title}</div>)
            }
        </div>
    );
};

export {UserPostsPage};