import * as authService from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const Login = ({onLogin}) => {
    const navigate = useNavigate();

    const loginHanlder = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        authService.login(email);
        onLogin(email);
        navigate('/');
    };

    return (
        <section id="login-page" className="login">
            <form onSubmit={loginHanlder} id="login-form" method='post'>
                <fieldset>
                    <legend>Login Form</legend>
                    <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Email"
                            />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                            />
                        </span>
                    </p>
                    <input
                        className="button submit"
                        type="submit"
                        value="Login"
                    />
                </fieldset>
            </form>
        </section>
    );
};

export default Login;
