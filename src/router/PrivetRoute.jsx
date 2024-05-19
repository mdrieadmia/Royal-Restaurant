import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivetRoute = ({children}) => {
    const {user, loading } = useAuth()
    const location = useLocation();

    if(loading){
        return <progress className="progress progress-primary"></progress>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

PrivetRoute.propTypes = {
    children: PropTypes.node
};

export default PrivetRoute;