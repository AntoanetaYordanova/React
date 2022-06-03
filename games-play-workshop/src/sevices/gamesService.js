async function getAll() {
    const resp = await fetch(
        'http://localhost:3030/data/games?sortBy=_createdOn%20desc'
    );
    return resp.json();
   
}

async function getById(id) {
    const resp = await fetch(`http://localhost:3030/data/games/${id}`);
    return resp.json();
}

export {
    getAll,
    getById
}