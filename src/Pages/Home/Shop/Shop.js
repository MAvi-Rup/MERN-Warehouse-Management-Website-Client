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
    // const navigateProduct = id =>{
    //     navigate(`/inventory/${id}`);
    // }



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
                    </Products>)
                }

                
               


            </div>
            <div className="d-grid gap-2 col-6 mx-auto mt-5">
                <button onClick={() => { navigate('/manage') }} className="btn btn-danger fw-bold" type="button">Manage Inventory</button>
            </div>

        </div>
    );
};

export default Shop;