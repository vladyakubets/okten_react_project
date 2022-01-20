import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import {usersService} from "../../services";
import {Album} from "../../components";

const UserAlbumsPage = () => {
    const [albums, setAlbums] = useState([]);
    const {id} = useParams()

    useEffect(()=>{
        usersService.getAlbums(id).then(value => setAlbums(value))
    },[id])
    return (
        <div>
            {
                albums.map(album => <Album key={album.id} album={album}/>)
            }
            <Outlet/>
        </div>
    );
};

export {UserAlbumsPage};