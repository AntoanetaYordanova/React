export const login = (email) => {
    localStorage.setItem('email', email)
}

export const getUser = () => {
    return localStorage.getItem('email');
}

export const isAuthenticated = () => {
    const user = getUser();
    return !!user;
}