import React, {useEffect, useState} from 'react';

import './Layout.css'
import {imageService} from "../../services/image.service";

const Layout = () => {
    const [image, setImage] = useState({url: '', tag: ''});
    const getImage = (tagName) => {
        imageService.getByTag(tagName).then(value => setImage({url: value, tag: tagName}))
    }
    return (
        <div className="main">
            <div className="buttons">
                <button onClick={(e) => getImage(e.target.innerText)}>cat</button>
                <button onClick={(e) => getImage(e.target.innerText)}>dog</button>
                <button onClick={(e) => getImage(e.target.innerText)}>girl</button>
                <button onClick={(e) => getImage(e.target.innerText)}>notebook</button>
            </div>
            {image.url && <div className="image">
                <img src={image.url} alt={image.tag}/>
                <button onClick={(e) => getImage(image.tag)}>change</button>
            </div>}

        </div>
    );
};

export {Layout};