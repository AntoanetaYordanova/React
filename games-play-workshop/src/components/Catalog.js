import { useState, useEffect } from 'react';
import { getAll } from '../sevices/gamesService';
import Game from './Game';

const Catalog = () => {
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

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            { isLoading ? <h2>Loading</h2> : null}
            { games.length > 0 
            ? ( games.map((g) => <Game key={g._id} g={g}/> )) 
            : <h3 className="no-articles">No articles yet</h3>
            }
        </section>
    );
};

export default Catalog;
