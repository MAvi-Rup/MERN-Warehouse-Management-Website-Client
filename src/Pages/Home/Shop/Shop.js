import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import ManageInventory from '../../Protected/ManageInventory/ManageInventory';
import Products from '../Product/Products';

const Shop = () => {
    const [products] = useProducts()
    // useEffect(() => {
    //     const url = `http://localhost:5000/products`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setProduct(data))

    // }, [])
    const navigate = useNavigate()
    const navigateProduct = id =>{
        navigate(`/inventory/${id}`);
    }
    
    products.map(product =><ManageInventory key={product._id} product={product}></ManageInventory> )



    const newProduct = products.slice(0, 6)
    return (

        <div className='container mt-5 mb-5' id='shop'>
            <h1 className='text-center text-danger text-decoration-underline fst-italic'>Made For You</h1>
            <div className='row'>
                {
                    newProduct.map(product => <Products
                        key={product._id}
                        product={product}
                    >
                        <button onClick={() => navigateProduct(product._id)} className='btn bg-danger bg-opacity-75'><span className='fw-bold'>Products Inventory: </span>{product.name}</button>
                    </Products>)
                }
               


            </div>
        </div>
    );
};

export default Shop;