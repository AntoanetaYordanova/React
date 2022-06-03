import { Link } from "react-router-dom";

const Game = ({
    g
}) => {
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={g.imageUrl} />
                <h6>{g.category}</h6>
                <h2>{g.title}</h2>
                <Link to={`/details/${g._id}`} className="details-button">
                    Details
                </Link>
            </div>
        </div>
    );
}

export default Game;