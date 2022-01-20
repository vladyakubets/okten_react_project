import './App.css';
import {Route, Routes} from "react-router-dom";

import {
    AlbumPhotosPage,
    PostCommentsPage,
    PostsPage,
    SinglePostPage,
    SingleUserPage,
    UserAlbumsPage,
    UserPostsPage,
    UsersPage
} from "./pages";
import {Layout} from "./components";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={"/users"} element={<UsersPage/>}>
                    <Route path={":id"} element={<SingleUserPage/>}>
                        <Route path={'posts'} element={<UserPostsPage/>}/>
                    </Route>
                    <Route path={':id/albums'} element={<UserAlbumsPage/>}>
                        <Route path={':albumId/photos'} element={<AlbumPhotosPage/>}/>
                    </Route>

                </Route>
                <Route path={"/posts"} element={<PostsPage/>}>
                    <Route path={":id"} element={<SinglePostPage/>}>
                        <Route path={'comments'} element={<PostCommentsPage/>}/>
                    </Route>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
