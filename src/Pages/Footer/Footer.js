import React from 'react';


const Footer = () => {
    return (
        <div className='conatiner-fluid bg-danger p-2 text-dark bg-opacity-75'>
            <div className="container pt-3 pb-3">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <h1 className="text-dark">
                            Important Links
                            <div className='d-flex align-items-center'>
                                <ul className="list-group ms-3">
                                    <a href="" className="text-decoration-none fs-5 text-dark">Home</a>
                                    <a href="" className="text-decoration-none fs-5 text-dark">About</a>
                                    <a href="" className="text-decoration-none fs-5 text-dark">Signin</a>
                                </ul>

                            </div>
                        </h1>
                    </div>
                    <dov className="col-md-6 col-12">
                        <div className='d-flex justify-content-center align-items-center'>
                            <div id='min-screen'>
                                <h1>Our Warehouse Address</h1>
                                <p>Tongi Gazipur, Bangladesh. <br /> Call us at : 01753374645 <br />
                                    Email: gadgetsworld@gmail.com</p>
                            </div>

                        </div>

                    </dov>
                </div>
            </div>

        </div>
    );
};

export default Footer;