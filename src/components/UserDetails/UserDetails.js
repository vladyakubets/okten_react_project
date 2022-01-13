import React from 'react';

const UserDetails = ({user, getPostsById}) => {
    return (
        <div>
            <h3>{user.username}</h3>
            <ul>
                <li>{user.email}</li>
                <li>{user.address.city}</li>
                <li>{user.address.street}</li>
            </ul>
            <button onClick={()=>{getPostsById(user.id)}}>getPosts</button>
        </div>
    );
};

export default UserDetails;