import React from 'react';
import {Link} from 'react-router-dom';

import './MovieCard.css'

const MovieCard = ({movie}) => {
    return (
        <div className={'movie-card'}>
            <Link to={`/movies/${movie.id}`}>
                <div className={'image'}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=''/>
                    <h3>
                        <div>{movie.title}</div>
                    </h3>
                </div>
            </Link>
        </div>
    );
};

export {MovieCard};