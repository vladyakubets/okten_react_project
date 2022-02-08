import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../store";
import {MovieCard, PaginationButton} from "../../components";
import {useSearchParams} from "react-router-dom";
import './MoviesPage.css'

const MoviesPage = () => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const {movies, total_pages, status} = useSelector(state => state.movies);

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
            {status === "fulfilled" ? <div>
                    <div className={'movies-container'}>{movies.map(movie => <MovieCard key={movie.id}
                                                                                        movie={movie}/>)}</div>
                    <div className={"paginationBtns"}>
                        <PaginationButton to={`?page=${+searchParams.get('page') - 1}`}
                                          disabled={searchParams.get('page') <= 1}>prev</PaginationButton>
                        <PaginationButton to={`?page=${+searchParams.get('page') + 1}`}
                                          disabled={searchParams.get('page') >= total_pages}>next</PaginationButton>
                    </div>
                </div>
                :
                <div className={"loading"}>
                    Loading...
                </div>
            }
        </div>
    );
};

export {MoviesPage};