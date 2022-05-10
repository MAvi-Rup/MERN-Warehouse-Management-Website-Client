import React from 'react';
import { GlobeAltIcon} from '@heroicons/react/solid'
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';

const SocialMediaLogin = () => {
    const [signInWithGoogle, user, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGit, loadingGit, errorGit] = useSignInWithGithub(auth);
  
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    
    let errorElement;

    if(loadingGoogle || loadingGit){
        return <Loading></Loading>
    }

    if (errorGoogle || errorGit) {
        errorElement = <p className='text-warning'>Error: {errorGoogle?.message} {errorGit?.message}</p>
    }

    if (user || userGit) {
        navigate(from, { replace: true });
    }
    return (
        <div className="d-grid gap-2 mb-4">
            {errorElement}
            <button onClick={()=>signInWithGithub()} className="btn btn-danger" type="button"><GlobeAltIcon height='25px' className=" text-blue-500 mx-2" />GitHub</button>
            <button onClick={()=>{signInWithGoogle()}} className="btn btn-danger" type="button"><GlobeAltIcon height='25px' className=" text-blue-500 mx-2" />Google</button>
        </div>
    );
};

export default SocialMediaLogin;