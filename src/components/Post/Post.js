import React from 'react';

const Post = ({post}) => {
    return (
        <div>
        <h4>Title:</h4>
            <p>{post.title}</p>
            <div>Body:</div>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;