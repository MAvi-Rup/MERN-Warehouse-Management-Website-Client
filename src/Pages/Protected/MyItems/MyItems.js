import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';

import auth from '../../../firebase.init';

const MyItems = () => {
    const {id}= useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        const url = `https://arcane-earth-34229.herokuapp.com/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [id,product])

    // let element;

    const [user] = useAuthState(auth);
    

    const handlePlaceOrder =(e) =>{
        e.preventDefault();
        const myitem = {
            email:user.email,
            product: product?.name,
            price:product?.price,
            phoneNo: e.target.number.value,
            productId: id
        }
        axios.post('https://arcane-earth-34229.herokuapp.com/myitem', myitem)
        .then(response =>{
            const {data} = response;
            if(data.insertedId){
                alert('Itemms Added Successfully')
                e.target.reset();
            }
        })
    }
    //handlePlaceOrder()
    

    return (
        <div className='conatiner'>
            <div className='w-50 mx-auto'>
                
                
                <form className='d-flex flex-column border' onSubmit={handlePlaceOrder}>
                    <div className='p-4 m-3'>
                        <label  className="form-label fw-bold">Product Name</label>
                        <input className='mb-2 form-control bg-danger bg-opacity-50 text-white' placeholder='Product Name' autoComplete='off' value={product?.name} />

                        <label  className="form-label fw-bold">Product Price</label>
                        <input className='mb-2 form-control bg-danger bg-opacity-50 text-white' autoComplete='off' placeholder='Price' type='number' value={product?.price} />

                        <label  className="form-label fw-bold">Phone No</label>
                        <input className='mb-2 form-control bg-danger bg-opacity-50 text-white' autoComplete='off' placeholder='Your Phone No' type='text' name='number'/>
                        <input className='btn btn-danger fw-bold' type="submit" value="Add Product" />
                        
                    </div>


                </form>
            
            </div>
            
        </div>
    );
};

export default MyItems;