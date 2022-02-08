import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

import './MoviePage.css'
import {getMovieDesc, resetStore} from '../../store';
import {Cast, MovieCards, MovieDescription} from '../../components';

const MoviePage = () => {
    const {movieDesc, status, similar} = useSelector(state => state.movieDesc);
    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
        dispatch(getMovieDesc({id}))

        return () => {
            dispatch(resetStore())
        }
    }, [id])

    return (
        <div>
            {status === 'fulfilled' ? <div className={'movie-desc'}>
                <img src={`https://image.tmdb.org/t/p/original${movieDesc.backdrop_path}`} alt=''/>
                <div className={'movie-desc__main'}>
                    <div><h2>{movieDesc.title}</h2></div>
                    <div><h4>{movieDesc.tagline}</h4></div>
                </div>
                <MovieDescription movieDesc={movieDesc}/>
                <Cast/>
                <div className={'similar container'}>
                    <h3>Similar</h3>
                    <MovieCards movies={similar}/>
                </div>
            </div> : <div className={'loading'}>
                Loading...
            </div>}
        </div>
    );
};

export {MoviePage};