import { Navigate } from 'react-router-dom';

const PrivateRouteadmin = ({children})=> {
	
    const admin = localStorage.getItem('admin');

    if (!admin || admin === null) {
        return <Navigate to="/" />
    }
    return children;
}


export default PrivateRouteadmin;