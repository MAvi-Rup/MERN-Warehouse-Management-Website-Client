import React, { useEffect, useState } from 'react';
import Products from '../Product/Products';

const Shop = () => {
    const [products, setProduct] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))

    },[])
    return (
        <div className='container mt-5 mb-5'>
            <h1 className='text-center text-danger text-decoration-underline'>Our Products</h1>
            <div className='row'>
            {
                        products.map(product => <Products
                            key={product.id}
                            product={product}
                        >
                        </Products>)
                    }
                

            </div>
        </div>
    );
};

export default Shop;