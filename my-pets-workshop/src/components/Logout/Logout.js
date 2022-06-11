// import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Logout = ({onLogout}) => {
    // useNavigate('/');
    onLogout();
    return <Navigate to={'/'} replace={true}/>
}

export default Logout;