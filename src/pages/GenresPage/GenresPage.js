import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Outlet} from 'react-router-dom';

import {getGenres} from '../../store';
import {GenresBadges} from '../../components';

const GenresPage = () => {
    const {genres, statusGenres} = useSelector(state => state.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres())
    }, [])

    return (
        <div>
            {statusGenres === 'fulfilled' ? <div>
                <GenresBadges genres={genres}/>
                <Outlet/>
            </div> : <div className={'loading'}>Loading...</div>}
        </div>
    );
};

export {GenresPage};