import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {GenresPage, MoviePage, MoviesPage} from "./pages";
import {Layout, MoviesByGenre} from "./components";
import useLocalStorage from "use-local-storage";

function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark"
        setTheme(newTheme)
    }

    return (
        <div className="App" data-theme={theme}>
            <Routes>
                <Route path={'/'} element={<Layout switchTheme={switchTheme} theme={theme}/>}>
                    <Route path={'/'} element={<Navigate to={'movies'}/>}/>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                    <Route path={'movies/:id'} element={<MoviePage/>}/>
                    <Route path={'genres'} element={<GenresPage/>}>
                        <Route path={':id'} element={<MoviesByGenre/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
