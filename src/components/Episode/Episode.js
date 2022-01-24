import React from 'react';
import {Link} from "react-router-dom";

import "./Episode.css"

const Episode = ({episode}) => {
    return (
        <div className="episode">
            <div>
                <div><b>Episode:</b> {episode.episode}</div>
                <div><b>Name:</b> {episode.name}</div>
            </div>
            <Link to={`${episode.id}/characters`} state={{...episode}}>Characters</Link>
        </div>
    );
};

export {Episode};