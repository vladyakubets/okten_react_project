import React from 'react';
import {Link} from "react-router-dom";

const Album = ({album}) => {
    return (
        <Link to={`${album.id}/photos`}>
            <div>{album.id}. - {album.title}</div>
        </Link>
    );
};

export {Album};