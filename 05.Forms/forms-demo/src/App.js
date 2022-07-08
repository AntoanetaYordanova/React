import styles from './App.module.css';
import { useState, useEffect, useRef } from 'react';
import HobbyList from './components/HobbyList';

function App() {
    const [data, setData] = useState([]);
    const [username, setUsername] = useState('');
    const passwordRef = useRef();

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/services')
            .then((res) => res.json())
            .then((res) => setData(Object.values(res)));
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
    };

    function onServiceChange(e) {
        console.log(e.target);
        setUsername(e.target.value);
        console.log(passwordRef.current.value);
        passwordRef.current.value = '';
    }

    function onUsernameChange(e) {
        const username = e.target.value;
        console.log(username);
        setUsername(username);
    }

    return (
        <div className={styles.app}>
            <div className={styles.wrapper}>
                <div>
                    <h3>Login Form</h3>
                    <form action="" method="post" onSubmit={submitHandler}>
                        <div>
                            <label htmlFor="username">
                                Username:
                                <input
                                    type="text"
                                    name="username"
                                    id=""
                                    value={username || 'Pesho'}
                                    onChange={onUsernameChange}
                                />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="password">
                                Password:
                                <input
                                    type="password"
                                    name="password"
                                    id=""
                                    ref={passwordRef}
                                />
                            </label>
                            <input type="submit" value="Login" />
                        </div>
                        <div>
                            <label htmlFor="services">Services</label>
                            <select
                                name="services"
                                id="services"
                                onChange={onServiceChange}
                            >
                                {data.map((d) => (
                                    <option key={d._id}>{d.name}</option>
                                ))}
                            </select>
                        </div>
                    </form>
                </div>
                <HobbyList hobby={'Climbing'}/>
            </div>
        </div>
    );
}

export default App;
