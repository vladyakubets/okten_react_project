import React from 'react';
import {useSelector} from 'react-redux';

import './Cast.css'

const Cast = () => {
    const {credits: cast} = useSelector(state => state.movieDesc);
    return (
        <div className={'cast-container'}>
            <h3>Cast</h3>
            <div className={'cast'}>{cast.map(actor => actor.profile_path && <div key={actor.id}>
                <img src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`} alt={actor.name}/>
                <p>{actor.name}</p>
            </div>)}</div>
        </div>
    );
};

export {Cast};