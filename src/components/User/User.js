import React from 'react';

const User = ({user, getUser}) => {
    return (
        <div key={user.id}>{user.id} -- {user.name} -- {user.email}
            <button onClick={()=>{getUser(user)}}>details</button>
        </div>
    );
};

export default User;