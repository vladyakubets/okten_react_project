import React, {useEffect, useState} from 'react';
import {albumsService} from "../../services";
import {useLocation, useParams} from "react-router-dom";

import './AlbumPhotosPage.css'
import {Photo} from "../../components";

const AlbumPhotosPage = () => {
    const [photos, setPhotos] = useState([]);
    const {albumId} = useParams();


    useEffect(()=>{
       albumsService.getPhotos(albumId).then(value => setPhotos(value))
    },[albumId])
    return (
        <div className="photos">
            {
                photos.map(photo => <Photo key={photo.id} photo={photo}/> )
            }
        </div>
    );
};

export {AlbumPhotosPage};