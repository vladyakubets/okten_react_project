import React from 'react';

const Photo = ({photo}) => {
    return (
        <div>
            <p>{photo.albumId} = > {photo.title}</p>

            <img src={photo.thumbnailUrl} alt={photo.title}/>
        </div>
    );
};

export {Photo};