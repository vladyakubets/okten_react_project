import React, {useEffect, useState} from 'react';

import "./EpisodesPage.css"
import {EpisodeService} from "../../services";
import {Episode} from "../../components";

const EpisodesPage = () => {
    const [page, setPage] = useState({current: 1, exists: null});
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        EpisodeService.getByPage(page.current).then(value => {
            setPage({...page, exists: value.info.pages})
            setEpisodes([...value.results])
        })
    }, [page.current])

    const changePage = (action) => {
        if (action === 'Next' && page.current < page.exists) {
            setPage({...page, current: page.current + 1})
        }
        if (action === 'Previous' && page.current > 1) {
            setPage({...page, current: page.current - 1})
        }
    }

    return (
        <div>
            <div className="page-info">
                <h2>Rick and Morty API</h2>
                <p>Episodes (page: {page.current})</p>
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