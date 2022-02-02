import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";

import {Layout} from "./components";
import {CarsPage, CommentsPage, NotFound, PostsPage, UsersPage} from "./pages";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={"/"} element={<Navigate to={"cars"}/>}/>
                    <Route path={"cars"} element={<CarsPage/>}/>
                    <Route path={"users"} element={<UsersPage/>}/>
                    <Route path={"posts"} element={<PostsPage/>}/>
                    <Route path={"comments"} element={<CommentsPage/>}/>
                    <Route path={"error"} element={<NotFound/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
