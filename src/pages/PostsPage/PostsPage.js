import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import "./PostsPage.css"
import {postsService} from "../../services";
import {Post} from "../../components";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        postsService.getAll().then(value => setPosts(value))
    },[])
    return (
        <div className="posts">
            <div>{posts.map(post => <Post key={post.id} post={post}/>)}</div>
            <Outlet/>

        </div>
    );
};

export {PostsPage};