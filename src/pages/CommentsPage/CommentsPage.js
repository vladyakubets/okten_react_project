import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {getComments} from "../../store";
import {Comment} from "../../components";

const CommentsPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {comments, status, error} = useSelector(state => state.commentReducer);

    useEffect(() => {
        dispatch(getComments())
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
                comments?.map(comment => <Comment key={comment.id} comment={comment}/>)
            }</div>
        </div>
    );
};

export {CommentsPage};