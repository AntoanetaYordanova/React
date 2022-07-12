import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const isAuth = (Component) => {
    const WrappedComponent = (props) => {

        const { user } = useAuth();
        return user.email ? (
            <Component {...props} />
        ) : (
            <Navigate to={'/login'} />
        );
    };

    return WrappedComponent;
};

export default isAuth;
