async function getAll() {
    const resp = await fetch(
        'http://localhost:3030/data/games?sortBy=_createdOn%20desc'
    );
    const result = resp.json();
    return result
}

export {
    getAll
}