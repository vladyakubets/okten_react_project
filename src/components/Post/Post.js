import React from 'react';

const Post = ({userId, title, body}) => {
    return (
        <div>
            <h2>UserId: {userId}</h2>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
        </div>
    );
};

export default Post;