import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import "./PostCommentsPage.css"
import {postsService} from "../../services";

const PostCommentsPage = () => {
    const [comments, setComments] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        postsService.getComments(id).then(value => setComments(value))
    },[])

    return (
        <div className="comments">
            {
                comments.map(comment => <div key={comment.id}>{comment.id} - {comment.body}</div>)
            }
        </div>
    );
};

export {PostCommentsPage};