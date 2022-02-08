import React from 'react';

import './MovieCards.css'
import {MovieCard} from '../MovieCard/MovieCard';

const MovieCards = ({movies}) => {
    return (
        <div className={'movies-container'}>{movies.map(movie => <MovieCard key={movie.id}
                                                                            movie={movie}/>)}</div>
    );
};

export {MovieCards};