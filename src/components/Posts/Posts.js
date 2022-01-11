import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";


const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(res => setPosts(res))
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