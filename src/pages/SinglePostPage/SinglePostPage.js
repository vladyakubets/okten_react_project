import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import "./SinglePostPage.css"
import {usersService} from "../../services";

const SinglePostPage = () => {
    const {state} = useLocation();
    const {id: postId} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        if (state) {
            setPost(state)
            return
        }
        usersService.getById(postId).then(value => setPost({...value}))
    }, [postId])

    return (
        <div className="single-post">
            <div>{
                post && <ul>
                    <li>{post.title}</li>
                    <li>{post.body}</li>
                </ul>
            }
                <Link to={'comments'}>
                    <button>Show comments</button>
                </Link>
            </div>
            <Outlet/>
        </div>
    );
};

export {SinglePostPage};