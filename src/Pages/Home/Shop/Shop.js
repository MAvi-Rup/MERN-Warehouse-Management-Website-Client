import React, { useEffect, useState } from 'react';
import Products from '../Product/Products';

const Shop = () => {
    const [products, setProduct] = useState([])
    useEffect(()=>{
        const url = `http://localhost:5000/products`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data))

    },[])
    const newProduct = products.slice(0,6)
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
        </div>
    );
};

export default Shop;