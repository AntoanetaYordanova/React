const baseUrl = 'http://localhost:3030';

export const login = async (email, password) => {
    const res = await fetch(`${baseUrl}/users/login`, {
        method: 'post',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    const jsonResult = await res.json();
   
    if (res.ok) {
        return jsonResult;
    }

    throw jsonResult.message;
};

export const register = async (email, password) => {
    const res = await fetch(`${baseUrl}/users/register`,{
        method: 'post',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const jsonResult = await res.json();
   
    if (res.ok) {
        return jsonResult;
    }

    throw jsonResult.message;
}

export const logout = async () => {
    
}

export const getUser = () => {
    return localStorage.getItem('email');
};

export const isAuthenticated = () => {
    const user = getUser();
    return !!user;
};
