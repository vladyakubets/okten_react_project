import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useSearchParams} from 'react-router-dom';

import {getMoviesByGenre} from '../../store';
import {MovieCards} from '../MovieCards/MovieCards';
import {Pagination} from '../Pagination/Pagination';

const MoviesByGenre = () => {
    const {movies, genres, statusMovies, total_pages} = useSelector(state => state.genres);
    const dispatch = useDispatch();

    const [searchParams, setSearchParams] = useSearchParams();
    const {id} = useParams();

    useEffect(() => {
        if (!searchParams.get('page')) {
            setSearchParams({page: '1'})
        }
        const page = searchParams.get('page');
        dispatch(getMoviesByGenre({id, page}))
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [searchParams, id])

    return (
        <div>
            {statusMovies === 'fulfilled' ? <div className={'by-genre container'}>
                <h3>{genres.map(genre => genre.id == id && genre.name)}</h3>
                <MovieCards movies={movies.results}/>
                <Pagination total_pages={total_pages}/>
            </div> : <div className={'loading'}>Loading...</div>}
        </div>
    );
};

export {MoviesByGenre};