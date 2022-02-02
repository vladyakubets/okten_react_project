import React from 'react';

const Comment = ({comment}) => {
    return (
        <div className={"card"}>
            <div>PostId:{comment.postId}</div>
            <div>Name: {comment.name}</div>
            <div>Email: {comment.email}</div>
            <div>Body: {comment.body}</div>
        </div>
    );
};

export {Comment};