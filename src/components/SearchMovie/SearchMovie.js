import React from 'react';
import {useForm} from "react-hook-form";

import './SearchMovie.css'
import {useDispatch} from "react-redux";
import {getMoviesBySearch} from "../../store";

const SearchMovie = ({isOpened}) => {
    const {register, watch} = useForm();
    const dispatch = useDispatch();

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