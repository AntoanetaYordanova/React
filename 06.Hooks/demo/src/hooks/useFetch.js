import { useState, useEffect } from 'react';


const useFetch = (url) => {
    const [state, setState] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        try {
            fetch(url)
        .then(res => res.json())
        .then((res) => {
            setIsLoading(false);
            setState(res.results);
        })
        } catch (err) {
            setError(err);
        }
    },[])

    return {
        state,
        isLoading,
        error
    };
}

export default useFetch;