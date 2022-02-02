import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {getPosts} from "../../store";
import {Post} from "../../components";

const PostsPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {posts, status, error} = useSelector(state => state.postReducer);

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    useEffect(() => {
        if (error) {
            navigate('/error')
        }
    }, [error])

    return (
        <div>
            {
                status === 'pending' && <h2>Loading...</h2>
            }
            <div className={"cards"}>{
                posts.map(post => <Post key={post.id} post={post}/>)
            }</div>
        </div>
    );
};

export {PostsPage};