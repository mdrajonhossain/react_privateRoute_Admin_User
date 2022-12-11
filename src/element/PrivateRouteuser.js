import { Navigate } from 'react-router-dom';





const PrivateRouteuser = ({children})=> {
	
    const user = localStorage.getItem('user');

    if (!user || user === null) {
        return <Navigate to="/" />
    }
    return children;    
}


export default PrivateRouteuser;