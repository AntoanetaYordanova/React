import * as authService from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const loginHanlder = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');

        try {
            const data = await authService.login(email, password);
            login(data);
        } catch (err) {
            console.log(err);
        }

        navigate('/');
    };

    return (
        <section id="login-page" className="login">
            <form onSubmit={loginHanlder} id="login-form" method="post">
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
