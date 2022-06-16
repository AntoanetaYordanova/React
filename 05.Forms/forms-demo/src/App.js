import styles from './App.module.css';

function App() {
    return (
        <div className={styles.app}>
            <div>
            <h3>Login Form</h3>
            <form action="" method="post">
                <div>
                    <label htmlFor="username">
                        Username:
                        <input type="text" name="username" id="" />
                    </label>
                </div>
                <div>
                    <label htmlFor="password">
                        Password:
                        <input type="password" name="password" id="" />
                        <input type="submit" value="Login" />
                    </label>
                </div>
            </form>
            </div>
        </div>
    );
}

export default App;
