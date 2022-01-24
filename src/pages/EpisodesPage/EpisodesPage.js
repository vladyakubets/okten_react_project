import React, {useEffect, useState} from 'react';

import "./EpisodesPage.css"
import {EpisodeService} from "../../services";
import {Episode} from "../../components";
import {useLocation, useParams, useSearchParams} from "react-router-dom";

const EpisodesPage = () => {
    const [numberOfPages, setNumberOfPages] = useState(1);
    const [episodes, setEpisodes] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams({});
    const [curPage,setCurPage] = useState(+searchParams.get("page"));

    useEffect(()=>{
        if (!+searchParams.get("page")){
            setSearchParams({page: 1})
            return
        }
        setCurPage(+searchParams.get("page"))
    },[])

    useEffect(() => {
        EpisodeService.getByPage(curPage).then(value => {
            setEpisodes([...value.results])
            setNumberOfPages(value.info.pages)
        })
    }, [curPage])

    const changePage = (action) => {
        const current = +searchParams.get("page")
        if (action === 'Next' && current < numberOfPages) {
            setSearchParams({ page: current + 1});
            setCurPage(current + 1 )
        }
        if (action === 'Previous' && current > 1) {
            setSearchParams({ page: current - 1});
            setCurPage(current - 1 )
        }
    }

    return (
        <div>
            <div className="page-info">
                <h2>Rick and Morty API</h2>
                <p>Episodes (page: {curPage})</p>
            </div>
            <div className="episodes">{episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}</div>
            <div className="pagination">
                <button onClick={(e) => changePage(e.target.innerText)}>Previous</button>
                <button onClick={(e) => changePage(e.target.innerText)}>Next</button>
            </div>
        </div>
    );
};

export {EpisodesPage};