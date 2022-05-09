import React from 'react';

const Section = () => {
    return (
        <div className='container bg-light mt-5'>
            <div className='row'>
                <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
                    <div className='mb-2 p-3'>
                        <h1 className='text-secondary'>Over-Ear Stereo <br /> <span className='text-danger'>Headphones</span></h1>
                        <p>
                            High Defination setreo Headphones, specially developed software and CVC noise technology that aims to deliver the music from your ipd on a whole new level !
                        </p>
                        <button className='btn btn-danger'>Know More</button>
                    </div>
                </div>
                <div className="col-md-6 col-12 mx-auto">
                    <img className='img-fluid .bg-transparent' src="images/beat.jpg" alt="" srcset="" />

                </div>

            </div>

        </div>
    );
};

export default Section;