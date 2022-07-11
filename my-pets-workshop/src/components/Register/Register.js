import * as authService from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';

const Register = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const registerHandler = async (e) => {
        e.preventDefault();
        const { email, password, repass } = Object.fromEntries(new FormData(e.currentTarget));
        const userData = await authService.register(email, password);
        login(userData);
        navigate('/');
    }

    return (
        <section id="register-page" className="register">
            <form method='post' id="register-form" onSubmit={registerHandler} >
                <fieldset>
                    <legend>Register Form</legend>
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
                    <p className="field">
                        <label htmlFor="repeat-pass">Repeat Password</label>
                        <span className="input">
                            <input
                                type="password"
                                name="repass"
                                id="repeat-pass"
                                placeholder="Repeat Password"
                            />
                        </span>
                    </p>
                    <input
                        className="button submit"
                        type="submit"
                        value="Register"
                    />
                </fieldset>
            </form>
        </section>
    );
};

export default Register;