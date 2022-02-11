import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useSearchParams} from 'react-router-dom';

import {getMovies} from '../../store';
import {MovieCards, Pagination} from '../../components';

const MoviesPage = () => {
    const {movies, total_pages, status} = useSelector(state => state.movies);
    const {movies: foundMovies, status: foundStatus} = useSelector(state => state.searchMovies);
    const dispatch = useDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (!searchParams.get('page')) {
            setSearchParams({page: '1'})
        }
        const page = searchParams.get('page');
        dispatch(getMovies({page}))
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [searchParams])

    return (
        <div>
            {status === 'fulfilled' ? <div className={'container'}>
                    <MovieCards movies={(foundMovies.length > 0 && foundStatus === 'fulfilled') ? foundMovies : movies}/>
                    <Pagination total_pages={total_pages}/>
                </div>
                :
                <div className={'loading'}>
                    Loading...
                </div>
            }
        </div>
    );
};

export {MoviesPage};