import React, {useEffect, useState} from 'react';
import Comment from "../Comment/Comment";


const Posts = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(res => setComments(res))
    }, [])

    return (
        <div className={'comments'}>
            {
                comments.map(comment => <Comment key={comment.id} name={comment.name} body={comment.body} email={comment.email} postId={comment.postId}/>)
            }
        </div>
    );
};

export default Posts;