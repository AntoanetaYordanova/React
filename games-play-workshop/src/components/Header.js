import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {

    const styles = {
        color: 'red'
    }

    return (
        <header>
            <h1>
                <Link className="home" to="/">
                    GamesPlay
                </Link>
            </h1>
            <nav>
                <NavLink activeStyle={styles} to="/catalog">All games</NavLink>
                <div id="user">
                    <Link to="/create">Create Game</Link>
                    <Link to="/logout">Logout</Link>
                </div>
                <div id="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
