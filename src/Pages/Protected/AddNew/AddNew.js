import React from 'react';
import { useForm } from 'react-hook-form';
import Title from '../../Header/Title/Title';

const AddNew = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/products/`

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div className='m-3'>
            <Title title="Add Item"></Title>
            <div className='w-50 mx-auto'>
                <h2>Please Add New Products !!</h2>
                <form className='d-flex flex-column border' onSubmit={handleSubmit(onSubmit)}>
                    <div className='p-4 m-3'>
                        <label  className="form-label fw-bold">Product Name</label>
                        <input className='mb-2 form-control bg-danger bg-opacity-50 text-white' placeholder='Product Name' {...register("ProductName")} />

                        <label  className="form-label fw-bold">Product Price</label>
                        <input className='mb-2 form-control bg-danger bg-opacity-50 text-white' autoComplete='off' placeholder='Price' type='number' {...register("price")} />

                        <label  className="form-label fw-bold">Product Quantity</label>
                        <input className='mb-2 form-control bg-danger bg-opacity-50 text-white' autoComplete='off' placeholder='Product Quantity' type='number' {...register("quantity")} />

                        <label  className="form-label fw-bold">Product Sold</label>
                        <input className='mb-2 form-control bg-danger bg-opacity-50 text-white' placeholder='Product Sold' type='number' {...register("sold")} />

                        <label className="form-label fw-bold" >Product Supplier</label>
                        <input className='mb-2 form-control bg-danger bg-opacity-50 text-white' placeholder='Product Supplier' type='text' {...register("supplier")} />
                        
                        <label className="form-label fw-bold" >Product Description</label>
                        <input className='mb-2 form-control bg-danger bg-opacity-50 text-white' placeholder='Product Description' type='text' {...register("desc")} />

                        <label className="form-label fw-bold" >Image Source</label>
                        <input className='mb-2 form-control bg-danger bg-opacity-50 text-white' placeholder='Photo URL' type="text" {...register("img")} />
                    </div>


                </form>
            </div>
        </div>
    );
};

export default AddNew;