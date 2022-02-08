import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getMovieDesc, resetStore} from "../../store";
import "./MoviePage.css"
import {MovieDescription} from "../../components/MovieDescription/MovieDescription";

const MoviePage = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const {movieDesc, status} = useSelector(state => state.movieDesc);

    useEffect(() => {
        dispatch(getMovieDesc({id}))

        return () => {
            dispatch(resetStore())
        }
    }, [])

    return (
        <div>
            {status === "fulfilled" ? <div className={"movie-desc"}>
                <img src={`https://image.tmdb.org/t/p/original${movieDesc.backdrop_path}`} alt=""/>
                <div className={"movie-desc__main"}>
                    <div><h2>{movieDesc.title}</h2></div>
                    <div><h4>{movieDesc.tagline}</h4></div>
                </div>
                <MovieDescription movieDesc={movieDesc}/>
            </div> : <div className={"loading"}>
                Loading...
            </div>}
        </div>
    );
};

export {MoviePage};