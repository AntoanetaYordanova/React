import useFetch from '../hooks/useFetch';
import { useContext } from 'react';
import AuthContext from '../contexts/АuthContext';

const CharacterList = () => {
    const value = useContext(AuthContext);
    console.log(value);
    const {state: characters, isLoading, error} = useFetch('https://swapi.dev/api/people');

    return(
        <ul>
            {isLoading ? <h3>Loading...</h3> : characters.map(e => <li key={e.name}>{e.name}</li>)}
            {}
        </ul>
    );
}

export default CharacterList;