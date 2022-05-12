import React from 'react';
import { useForm } from 'react-hook-form';

const AboutUs = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = (data, e) => {



        const url = `http://localhost:5000/message/`

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                e.target.reset()
            })
    };
    return (
        <div className='container mb-2'>
            <div className="row">
                <h1 className="text-center fw-bold text-danger fst-italic">
                    Contact Us
                </h1>
                <form className='d-flex flex-column border' onSubmit={handleSubmit(onSubmit)}>
                    <div className='p-4 m-3'>
                        <label className="form-label fw-bold">Customer Name</label>
                        <input className='mb-2 form-control bg-danger bg-opacity-50 text-white' placeholder='Your Name' autoComplete='off' {...register("name")} />
                        <label className="form-label fw-bold">Email</label>
                        <input className='mb-2 form-control bg-danger bg-opacity-50 text-white' autoComplete='off' placeholder='Your Email' type='email' {...register("email")} />
                        <label className="form-label fw-bold">Product Price</label>
                        <input className='mb-2 form-control bg-danger bg-opacity-50 text-white' autoComplete='off' placeholder='Your Number' type='number' {...register("number")} />

                        <label className="form-label fw-bold" >Message</label>

                        <textarea className='mb-2 form-control bg-danger bg-opacity-50 text-white' placeholder='Your Message' type='text' {...register("message")} />

                        <input className='btn btn-danger fw-bold' type="submit" value="Send Message" />
                    </div>


                </form>

            </div>
        </div>
    );
};

export default AboutUs;