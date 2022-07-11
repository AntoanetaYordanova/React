import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export default function Header() {
    const { user } = useContext(AuthContext);
    const userNav = (
        <div id="user">
            <span>Welcome {user?.email}</span>
            <Link className="button" to="/my-pets">
                My Pets
            </Link>
            <Link className="button" to="/add-pet">
                Add Pet
            </Link>
            <Link className="button" to="/logout">
                Logout
            </Link>
        </div>
    );

    const guestNav = (
        <div id="guest">
            <Link className="button" to="/login">
                Login
            </Link>
            <Link className="button" to="/register">
                Register
            </Link>
        </div>
    );

    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link to="/">Dashboard</Link>
                    {user.email ? userNav : guestNav}
                </section>
            </nav>
        </header>
    );
}
