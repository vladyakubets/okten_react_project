import React from 'react';

const Comment = ({postId, name, email, body}) => {
    return (
        <div>
            <h2>PostId: {postId}</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Body: {body}</p>
        </div>
    );
};

export default Comment;