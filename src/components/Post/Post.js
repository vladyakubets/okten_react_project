import React from 'react';

const Post = ({post}) => {
    return (
        <div className={"card"}>
            <div>Title: {post.title}</div>
            <div>Body: {post.body}</div>
        </div>
    );
};

export {Post};