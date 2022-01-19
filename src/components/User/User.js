import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {
    return (
        <div>
            <Link to={user.id.toString()} state={user}>{user.username}</Link>
        </div>
    );
};

export {User};