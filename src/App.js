import {useEffect, useState} from "react";

import './App.css';
import Users from "./components/Users/Users";
import {userService} from "./services/user.service";

function App() {
    const [formData, setFormData] = useState({name: "", userName: "", email: ""});
    const [users, setUsers] = useState([]);
    const [foundUsers, setFoundUsers] = useState([])

    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value));
    }, [])

    const find = (e) => {
        e.preventDefault()
        console.log(formData);
        const filtered = users.filter(({
                                           name,
                                           username,
                                           email
                                       }) => name.toLowerCase().indexOf(formData?.name.toLowerCase()) !== -1 &&
            username?.toLowerCase().indexOf(formData.userName.toLowerCase()) !== -1 &&
            email?.toLowerCase().indexOf(formData.email.toLowerCase()) !== -1)
        console.log(filtered);
        setFoundUsers(filtered);

    }

    const formHandler = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    return (
        <div className="App">
            <form onSubmit={find}>
                <div>
                    <label>Name: <input type="text" name={'name'} onChange={formHandler}/></label>
                    <label>UserName: <input type="text" name={'userName'} onChange={formHandler}/></label>
                    <label>Email: <input type="text" name={'email'} onChange={formHandler}/></label>
                    <button type={"submit"}>find</button>
                </div>
                <Users users={!foundUsers.length ? users : foundUsers}/>
            </form>
        </div>
    );
}

export default App;
