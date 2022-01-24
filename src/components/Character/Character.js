import React from 'react';

import "./Character.css"

const Character = ({character}) => {
    return (
        <div className="character">
            <img src={character.image} alt={character.name}/>
            <div>Name: {character.name ? character.name : 'unknown'}</div>
            <div>Species: {character.species ? character.species : 'unknown'}</div>
            <div>Status: {character.status ? character.status : 'unknown'}</div>
            <div>Type: {character.type ? character.type : 'unknown'}</div>
        </div>
    );
};

export {Character};