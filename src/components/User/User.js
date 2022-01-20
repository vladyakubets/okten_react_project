import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {
    return (
        <div>
            <Link to={user.id.toString()} state={user}>{user.username}   </Link>
            <Link to={`${user.id}/albums`}>
                <button>Albums</button>
            </Link>
        </div>
    );
};

export {User};