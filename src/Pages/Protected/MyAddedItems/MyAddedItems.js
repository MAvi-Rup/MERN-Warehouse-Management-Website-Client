
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../../firebase.init';
import useOrders from '../../hooks/useOrders';
import OrderDetails from '../OrderDetails/OrderDetails';


const MyAddedItems = () => {
    const [user] = useAuthState(auth);
    const [orders] = useOrders()

    return (
        <div className='container mb-3'>
            <div className="row">
                <h1 className='text-center text-danger'>User Email: {user?.email}</h1>
                <h1 className='text-center text-danger'>My Added Items: {orders?.length}</h1>
               
                {
                    orders.map(order=><OrderDetails key={order._id} order={order}></OrderDetails>)
                }
            </div>
        </div>
    );
};

export default MyAddedItems;