import "./Users.css"

const Users = ({users}) => {

    return (
        <div>
            {
                users.map(value => <div className="user" key={value.id}>{value.id} -- {value.name} -- {value.username} -- {value.email}</div>)
            }
        </div>
    );
};

export default Users;