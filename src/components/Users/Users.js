import React, {useEffect, useState} from 'react';
import User from "../User/User";
import getDataJsonPlaceholder, {apiUsers} from "../../api/api";

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getDataJsonPlaceholder('users', setUsers)
    }, [])

    return (
        <div className="users">
            {
                users.map(user => <User key={user.id} name={user.name} surname={user.surname} email={user.email}
                                        address={user.address}/>)
            }
        </div>
    );
};

export default Users;