import React from 'react';

const Footer = () => {
    return (
        <div className='conatiner-fluid bg-danger p-2 text-dark bg-opacity-25'>
            <div className="row">
                <dov className="col-6">
                    <h1 className="text-center text-white">
                        Important Links
                        <div className='d-flex justify-content-center align-items-center'>
                            <ul className="list-group">
                                <a href=""><li className="list-group-item">Home</li></a>
                                <a href=""><li className="list-group-item">About</li></a>
                                <a href=""><li className="list-group-item">Signin</li></a>
                            </ul>

                        </div>
                    </h1>
                </dov>
                <dov className="col-6">
                    <div className='d-flex justify-content-center align-items-center'>
                        <div>
                            <h1>Our Warehouse Address</h1>
                            <p>Tongi Gazipur, Bangladesh. <br /> Call us at : 01753374645 <br />
                            Email: gadgetsworld@gmail.com</p>
                        </div>

                    </div>

                </dov>
            </div>

        </div>
    );
};

export default Footer;