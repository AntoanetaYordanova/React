import { useNavigate } from "react-router-dom"

const Logout = ({onLogout}) => {
    console.log('Here');
    onLogout();
    useNavigate('/');
}

export default Logout;