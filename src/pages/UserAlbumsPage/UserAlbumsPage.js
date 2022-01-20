import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {usersService} from "../../services";

const UserAlbumsPage = () => {
    const {id} = useParams();

    useEffect(()=>{
        usersService.getAlbums(id).then(value => console.log(value))
    },[])

    return (
        <div>

        </div>
    );
};

export {UserAlbumsPage};