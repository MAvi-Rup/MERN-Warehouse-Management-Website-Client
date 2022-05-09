import React from 'react';

const Products = ({product}) => {
    const { img, id, desc, suplier,quantity, price, name } = product

    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
        <div className="card h-100" style={{ width: "18rem", height: '300px' }}>
            <img src={img} className="card-img-top" alt="Service Image" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text fw-bold">Price: {price} BDT</p>
                <p className="card-text fw-bold">Quantity: {quantity} BDT</p>
                <p className="card-text">{desc}</p>
                <small className="text-muted">Suplier Name: {suplier}</small>
               

            </div>
            <div className="card-footer">
                {/* <button onClick={()=>{navigateCheckout(<Checkout key={id} service={service}></Checkout>)}} className="btn btn-primary">Chcekout</button> */}
            </div>
        </div>
    </div>
    );
};

export default Products;