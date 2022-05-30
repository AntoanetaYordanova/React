import { useState, useEffect } from 'react';
import { getAll } from '../sevices/gamesService';

const Catalog = ({
    changePage
}) => {
    const [isLoading, setLoading] = useState(false);

    const [games, setGames] = useState([]);
    async function fetchData() {
        setLoading(true);
        try {
            const result = await getAll();
            setGames(result);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    }

     
    useEffect(() => {
        fetchData();
    }, []);

    const detailsClickHandler = (ev) => {
        ev.preventDefault();
        const url = new URL(ev.target.href);
        changePage(url.pathname);
    }

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            { isLoading ? <h2>Loading</h2> : null}
            { games.length > 0 
            ? ( games.map((g) => {
                    return (
                        <div className="allGames">
                            <div className="allGames-info">
                                <img src={g.imageUrl} />
                                <h6>{g.category}</h6>
                                <h2>{g.title}</h2>
                                <a onClick={detailsClickHandler} href={`/details/${g._id}`} className="details-button">
                                    Details
                                </a>
                            </div>
                        </div>
                    );
                })
            ) 
            : <h3 className="no-articles">No articles yet</h3>
            }
        </section>
    );
};

export default Catalog;
