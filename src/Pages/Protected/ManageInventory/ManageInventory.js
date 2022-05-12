import { TrashIcon } from '@heroicons/react/solid';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../../Header/Title/Title';
import Products from '../../Home/Product/Products';
import useProducts from '../../hooks/useProducts';

const ManageInventory = () => {
    const [products, setProduct] = useProducts()
    const navigate = useNavigate()
    
    const deletProduct = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://arcane-earth-34229.herokuapp.com/products/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProduct(remaining);
                })
        }
    }



    return (
        <div className='container mt-5 mb-5' id='shop'>
            <Title title="Manage Inventory"></Title>
            <h1 className='text-center text-danger text-decoration-underline fst-italic'>Inventory All Products</h1>
            <div className='row'>
                {
                    products.map(product => <Products
                        key={product._id}
                        product={product}>
                        <button onClick={() => deletProduct(product._id)} className='btn bg-danger bg-opacity-75'><span className='fw-bold'>Delete: {product.name} </span><TrashIcon height='20px' className=" text-blue-500 mx-1" /></button>
                    </Products>)

                }




            </div>
            <div className="d-grid gap-2 col-6 mx-auto mt-5">
                <button onClick={() => { navigate('/addnew') }} className="btn btn-danger fw-bold" type="button">Add Item</button>
            </div>
        </div>

    );
};

export default ManageInventory;