import React, {useState} from "react";

import './App.css';
import Users from "./components/Users/Users";
import Post from "./components/Post/Post";
import {userService} from "./services/user.service";

function App() {
    const [posts, setPosts] = useState([])

    const getPostsById = (id) => {
        userService.getPostsById(id).then(value => setPosts(value))
    }

    return (
        <div className="App">
            <Users getPostsById={getPostsById}/>
            <hr/>
            <div className="posts">
                {
                    posts.map(value => <Post key={value.id} post={value}/>)
                }
            </div>
        </div>
    );
}

export default App;
