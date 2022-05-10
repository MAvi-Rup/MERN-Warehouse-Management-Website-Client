
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Title from '../../Header/Title/Title';
import Loading from '../../Loading/Loading';

import SocialMediaLogin from '../SocialMediaLogin/SocialMediaLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    let handleError;
    let from = location.state?.from?.pathname || "/";


    const navigateRegister = event => {
        navigate('/register');
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if(loading||sending){
        return <Loading></Loading>
    }
    if (error) {
        handleError = <p className='text-warning fs-4'>Error:{error?.message}</p>
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);

    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <img className='img-fluid' src="./images/beat2.png" alt=""/>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <div className='container mx-auto'>
                        <Title title="Login"></Title>
                        <h2 className='text-primary text-center mt-2 text-danger'>Please Login !</h2>
                        <Form onSubmit={formSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control className='bg-danger bg-opacity-50 text-white' ref={emailRef} type="email" placeholder="Enter email" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control className='bg-danger bg-opacity-50 text-white' ref={passwordRef} autoComplete='off' type="password" placeholder="Password" required />
                            </Form.Group>
                            <Button variant="danger w-50 mx-auto d-block mb-2" type="submit">
                                Login
                            </Button>
                        </Form>
                        {handleError}
                        <p className='text-danger fst-italic'>New to Gadget World? <Link to="/register" className='text-dark pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>
                        <p className='text-danger fst-italic'>Forget Password? <button className='btn btn-link text-dark pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
                        <SocialMediaLogin></SocialMediaLogin>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;