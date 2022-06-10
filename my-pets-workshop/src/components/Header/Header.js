import { Link } from 'react-router-dom';

export default function Header({ isAthenticated, email }) {
    const userNav = (
        <div id="user">
            <span>Welcome, {email}</span>
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
                    { isAthenticated ? userNav : guestNav }
                </section>
            </nav>
        </header>
    );
}
