import React from 'react';

import './style.css';

const Launch = ({launch}) => {
    return ( launch.launch_year != 2020 ?
        <div className="launch">
            <div>
                <h3>{launch.mission_name}</h3>
                <p>{launch.launch_year}</p>
            </div>
            <div>
                <img src={launch.links.mission_patch_small} alt=""/>
            </div>
        </div> : null
    );
};

export default Launch;