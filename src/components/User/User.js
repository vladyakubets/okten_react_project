import React from 'react';

const User = ({user}) => {
    return (
        <div className={"card"}>
                <div>Username: {user.username}</div>
                <div>Name: {user.name}</div>
                <div>Email: {user.email}</div>
                <div>Phone: {user.phone}</div>
        </div>
    );
};

export {User};