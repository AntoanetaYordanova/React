import styles from './App.module.css';
import { useState, useEffect } from 'react';


function App() {
const [data, setData] = useState([]);
const [username, setUsername] = useState('');

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/services')
        .then(res => res.json())
        .then(res => setData(Object.values(res)));
    }, []);

    function onServiceChange (e) {
        setUsername(e.target.value);
    }

    function onUsernameChange(e) {
        const username = e.target.value;
        setUsername(username);
    }

    return (
        <div className={styles.app}>
            <div>
            <h3>Login Form</h3>
            <form action="" method="post">
                <div>
                    <label htmlFor="username" >
                        Username:
                        <input type="text" name="username" id=""  value={username || 'Pesho'} onChange={onUsernameChange}/>
                    </label>
                </div>
                <div>
                    <label htmlFor="password">
                        Password:
                        <input type="password" name="password" id="" />
                        <input type="submit" value="Login" />
                    </label>
                </div>
                <div>
                    <label htmlFor="services">Services</label>
                    <select name="services" id="services" onChange={onServiceChange}>
                        {data.map(d => <option key={d._id} value={d._id}>{d.name}</option>)}
                    </select>
                </div>
            </form>
            </div>
        </div>
    );
}

export default App;
