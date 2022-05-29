import { TrashIcon } from '@heroicons/react/solid';
import React from 'react';
import Title from '../../Header/Title/Title';
import useOrders from '../../hooks/useOrders';

const OrderDetails = ({order}) => {
    const [orders,setOrders,user]= useOrders()
    const deleteMyItem = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://arcane-earth-34229.herokuapp.com/myitem/${id}?email=${user?.email}`
            fetch(url,  {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                })
        }
    }
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <Title title="My Item"></Title>
        <div className="card h-100" style={{ width: "18rem", height: '300px' }}>
            <div className="card-body">
                <h5 className="card-title">Name: {order.product}</h5>
                <p className="card-text fw-bold">Price: {order.price} BDT</p>
                <p className="card-text fw-bold">Mobile No: {order.phoneNo}</p>
            </div>
            <div className="card-footer">
            <button onClick={() => deleteMyItem(order._id)} className='btn bg-danger bg-opacity-75'><span className='fw-bold'>Delete: {order.product} </span><TrashIcon height='20px' className=" text-blue-500 mx-1" /></button>

            </div>
        </div>
    </div>
    );
};

export default OrderDetails;