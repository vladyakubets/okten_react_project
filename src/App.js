import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";

import {Layout} from "./components";
import {CharactersPage, EpisodesPage} from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Layout/>}>
            <Route index element={<Navigate to="episodes"/>}/>
            <Route path="episodes" element={<EpisodesPage/>}/>
            <Route path="episodes/:id/characters" element={<CharactersPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
