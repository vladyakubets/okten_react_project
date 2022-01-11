import React from 'react';

const User = ({name, surname, email, address}) => {
    return (
        <div>
            <h2>{name} {surname}</h2>
            <h3>Email: {email}</h3>
            <p>Address: {address.city}, {address.street}, {address.zipcode}</p>
        </div>
    );
};

export default User;