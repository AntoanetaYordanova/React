import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Login = () => {
    const history = useHistory();

    const submitHandler = (ev) => {
        ev.preventDefault();
        console.log(history);
    }
    return(
        <section id="login-page" className="auth">
                <form onSubmit={submitHandler} id="login">
                    <div className="container">
                        <div className="brand-logo"></div>
                        <h1>Login</h1>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Sokka@gmail.com"
                        />

                        <label htmlFor="login-pass">Password:</label>
                        <input
                            type="password"
                            id="login-password"
                            name="password"
                        />
                        <input
                            type="submit"
                            className="btn submit"
                            value="Login"
                        />
                        <p className="field">
                            <span>
                                If you don't have profile click{' '}
                                <Link to="/register">here</Link>
                            </span>
                        </p>
                    </div>
                </form>
            </section>
    )
}

export default Login;