import React from 'react';

const OrderDetails = ({order}) => {
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
        <div className="card h-100" style={{ width: "18rem", height: '300px' }}>
            <div className="card-body">
                <h5 className="card-title">Name: {order.product}</h5>
                <p className="card-text fw-bold">Price: {order.price} BDT</p>
                <p className="card-text fw-bold">Mobile No: {order.phoneNo}</p>
            </div>
            <div className="card-footer">

            </div>
        </div>
    </div>
    );
};

export default OrderDetails;