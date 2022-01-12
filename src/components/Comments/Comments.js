import React, {useEffect, useState} from 'react';
import Comment from "../Comment/Comment";
import getDataJsonPlaceholder from "../../api/api";


const Comments = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        getDataJsonPlaceholder('comments', setComments)
    }, [])

    return (
        <div className="comments">
            {
                comments.map(comment => <Comment key={comment.id} name={comment.name} body={comment.body} email={comment.email} postId={comment.postId}/>)
            }
        </div>
    );
};

export default Comments;