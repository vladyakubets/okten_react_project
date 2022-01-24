import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import "./CharactersPage.css"
import {EpisodeService} from "../../services";
import {Character} from "../../components";

const CharactersPage = () => {
    const [characters, setCharacters] = useState([]);
    const {state: {characters: charactersArray, episode}} = useLocation();

    useEffect(() => {
        for (const character of charactersArray) {
            const id = character.slice(character.lastIndexOf('/') + 1)
            EpisodeService.getCharacterById(id).then(value =>
                setCharacters((prevState) => [...prevState, value])
            )
        }
    }, [])
    return (
        <div>
            <div className="page-info">
                <h2>Rick and Morty API</h2>
                <p>Episode: {episode}</p>
            </div>
            <div className="characters">
                {
                    characters.map(character => <Character key={character.id} character={character}/>)
                }
            </div>
        </div>
    );
};

export {CharactersPage};