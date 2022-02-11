import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import './SearchMovie.css'
import {MoviesService} from "../../services";
import {MovieCards} from "../MovieCards/MovieCards";
import {useDispatch, useSelector} from "react-redux";
import {getMoviesBySearch} from "../../store";

const SearchMovie = ({isOpened}) => {
    const {register, watch} = useForm();
    const dispatch = useDispatch();
    const watchAllFields = watch();

    React.useEffect(() => {
        watch(async ({search}) => {
            dispatch(getMoviesBySearch({search}))
        });
    }, [watch]);
    return (
        isOpened && <div>
            <input type="text" placeholder={'Search movie'} {...register('search')}/>
        </div>
    );
};

export {SearchMovie};