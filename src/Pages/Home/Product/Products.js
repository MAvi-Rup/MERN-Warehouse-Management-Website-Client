import { ShoppingCartIcon } from '@heroicons/react/solid';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Products = (props) => {
    const { img,_id, desc, suplier,quantity, price, name } = props.product
    const navigate = useNavigate()
    const navigateProduct = id =>{
        navigate(`/inventory/${id}`);
    }
    const navigateMyProduct = id =>{
        navigate(`/myitem/${id}`);
    }

    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
        <div className="card h-100" style={{ width: "18rem", height: '300px' }}>
           
            <img src={img} className="card-img-top" alt="Service Image" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text fw-bold">Price: {price} BDT</p>
                <p className="card-text fw-bold">Quantity: {quantity}</p>
                <p className="card-text">{desc}</p>
                <small className="text-muted">Suplier Name: {suplier}</small>
            </div>
            <div className="card-footer">
            <button onClick={() => navigateProduct(_id)} className='btn bg-danger bg-opacity-75'><span className='fw-bold'>Products Inventory: </span>{name}</button>
            <button onClick={() => navigateMyProduct(_id)} className='btn bg-danger bg-opacity-75 mt-3'><span className='fw-bold'>Add My Item: </span><ShoppingCartIcon height='20px' className=" text-blue-500 mx-1"/>{name}</button>
            {/* <button onClick={() => navigateProduct(_id)} className='btn bg-danger bg-opacity-75'><span className='fw-bold'>Products Inventory: </span>{name}</button> */}
            <div className='mt-3'> {props.children}</div>
            </div>
        </div>
    </div>
    );
};

export default Products;