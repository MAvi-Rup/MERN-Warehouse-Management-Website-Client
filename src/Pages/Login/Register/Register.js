import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Title from '../../Header/Title/Title';
import Loading from '../../Loading/Loading';
import SocialMediaLogin from '../SocialMediaLogin/SocialMediaLogin';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let handleError;
    const navigateLogin = ()=>{
        navigate('/login')
    }
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    if(error){
        handleError= <p className='text-warning'>Error:{error?.message}</p>
    }

    if(loading || updating){
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const formSubmit =async(e)=>{
        e.preventDefault()
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

    }
    return (
        <div className='container'>
        <div className="row">
            <div className="col-md-6">
                <img className='img-fluid' src="./images/beat2.png" alt="" />
            </div>
            <div className="col-md-6 d-flex align-items-center">
                <div className='container mx-auto'>
                    <Title title="Register"></Title>
                    <h2 className='text-primary text-center mt-2 text-danger'>Please Register !</h2>
                    <Form onSubmit={formSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control className='bg-danger bg-opacity-50 text-white' ref={nameRef} type="text" placeholder="Enter name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className='bg-danger bg-opacity-50 text-white' ref={emailRef} type="email" placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control className='bg-danger bg-opacity-50 text-white' ref={passwordRef} type="password" placeholder="Password" required />
                        </Form.Group>
                        <Button variant="danger w-50 mx-auto d-block mb-2" type="submit">
                            Register
                        </Button>
                    </Form>
                    {handleError}
                    <p className='text-danger fst-italic'>Already have an account?<Link to="/login" className='text-dark pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
                    <SocialMediaLogin></SocialMediaLogin>
                </div>
            </div>
        </div>

    </div>
    );
};

export default Register;