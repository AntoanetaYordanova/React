import { useNavigate } from "react-router-dom";

const Logout = ({onLogout}) => {
    const navigate = useNavigate();
    onLogout();
    navigate('/');
}

export default Logout;