import { Navigate } from "react-router-dom";
import useGetLoggedIn from "../hook/useGetLoggedIn";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const {loggedIn, loading} = useGetLoggedIn();
    if(loading){
        return;
    }
    if(!loggedIn){
        return <Navigate to='/signin' />

    }
    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoute;