import React, {useEffect, useState} from 'react';
import User from "../User/User";

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res => setUsers(res))
    }, [])

    return (
        <div className={"users"}>
            {
                users.map(user => <User key={user.id} name={user.name} surname={user.surname} email={user.email}
                                        address={user.address}/>)
            }
        </div>
    );
};

export default Users;