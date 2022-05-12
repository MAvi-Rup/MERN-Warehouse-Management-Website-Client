import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../../firebase.init';
import OrderDetails from '../OrderDetails/OrderDetails';


const MyAddedItems = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    
    const email = user?.email;
    useEffect(() => {
        const url = `http://localhost:5000/myitem?email=${email}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    }, [user])

    return (
        <div className='container'>
            <div className="row">
                <h1 className='text-center text-danger'>User Email: {user?.email}</h1>
                <h1 className='text-center text-danger'>My Added Items: {orders?.length}</h1>
                {console.log(orders)}
                {
                    orders.map(order=><OrderDetails key={order._id} order={order}></OrderDetails>)
                }
            </div>
        </div>
    );
};

export default MyAddedItems;