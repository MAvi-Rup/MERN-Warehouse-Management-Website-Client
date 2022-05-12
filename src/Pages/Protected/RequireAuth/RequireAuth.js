import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';

const RequireAuth = ({children}) => {
    const [user,loading] = useAuthState(auth);
    const location = useLocation();

    if(loading){
        return <Loading></Loading>
    }

    if(!user){
        return <Navigate to="/login" state ={{from: location}} replace></Navigate>
    }

    if(!user.emailVerified){
        return <div className = 'container'>
            <h3 className='text-danger'>Your Email is not verified please verify your email.</h3>
        </div>
    }
    
    return children;
};

export default RequireAuth;