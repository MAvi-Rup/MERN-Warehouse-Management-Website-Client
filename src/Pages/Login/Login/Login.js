import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Title from '../../Header/Title/Title';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [signInWithEmailAndPassword,user,loading,error] = useSignInWithEmailAndPassword(auth);
    let handleError;

    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }

    const formSubmit = async(e) =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);

    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <img className='img-fluid' src="./images/beat2.png" alt="" srcset="" />
                </div>
                <div className="col-md-6">
                    <div className='container mx-auto'>
                        <Title title="Login"></Title>
                        <h2 className='text-primary text-center mt-2 text-danger'>Please Login</h2>
                        <Form onSubmit={formSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control className='bg-danger bg-opacity-75' ref={emailRef} type="email" placeholder="Enter email" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                            </Form.Group>
                            <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                                Login
                            </Button>
                        </Form>
                        {handleError}
                        <p>New to Gadget World? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>
                        <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
                        {/* <SocialLogin></SocialLogin> */}

                    </div>



                </div>
            </div>

        </div>
    );
};

export default Login;