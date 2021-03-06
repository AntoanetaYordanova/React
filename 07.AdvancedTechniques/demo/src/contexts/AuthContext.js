import { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

const initialState = {
    _id : '',
    email : '',
    accessToken : ''
}

export const AuthProvider = ({
    children    
}) => {
    const [user, setUser] = useState(initialState);
    const login = (email) => {
        setUser(email);
    }

    return(
        <AuthContext.Provider value={{user, login}}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const authState = useContext(AuthContext);
    return authState;
}