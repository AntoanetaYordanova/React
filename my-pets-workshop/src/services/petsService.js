const baseUrl = 'http://localhost:3030'

async function getAll() {
    const res = await fetch(`${baseUrl}/data/pets`);
    return res.json();
}

async function getById(id) {
    const res = await fetch(`${baseUrl}/data/pets/${id}`);
    return res.json();
}

async function create(data) {
    await fetch(`${baseUrl}/data/pets`, {
        method : 'post',
        headers : {
            'x-authorization' : '8d3ffe1cd02b23f0a2f0d7d78f152551ac10b3e7914f4f188b41eede14e2ccfe'
        },
        body : JSON.stringify(data)
    });
}

export {
    getAll,
    create,
    getById
}