import React, {useEffect, useState} from 'react';

import './UserInfo.css';
import {ToggleButton} from '../ToggleButton/ToggleButton';

const UserInfo = ({switchTheme, theme}) => {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <div className={'user'} onClick={() => setIsOpened(!isOpened)}>
            <img src='/avatar.png' alt='image'/>
            <div className={'drop-down-container'} style={{display: isOpened ? "block" : "none"}}>
                <div className={'drop-down'} onClick={e => e.stopPropagation()}>
                    <p>Vlad Yakubets</p>
                    <ToggleButton switchTheme={switchTheme} theme={theme}/>
                </div>
            </div>
        </div>
    );
};

export {UserInfo};