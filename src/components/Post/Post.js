import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post}) => {
    return (
        <div>
            <Link to={post.id.toString()} state={post}>{post.title}</Link>
        </div>
    );
};

export {Post};