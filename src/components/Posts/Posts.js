import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";
import getDataJsonPlaceholder, {apiPosts} from "../../api/api";


const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getDataJsonPlaceholder('posts', setPosts)
    }, [])

    return (
        <div className={"posts"}>
            {
                posts.map(post => <Post key={post.id} body={post.body} title={post.title} userId={post.userId}/>)
            }
        </div>
    );
};

export default Posts;