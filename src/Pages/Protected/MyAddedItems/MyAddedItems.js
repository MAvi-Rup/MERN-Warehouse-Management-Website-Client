import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../../firebase.init';


const MyAddedItems = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
   
    useEffect(()=>{
        const getOrders = async() =>{
            const email = user?.email;
            const url = `http://localhost:5000/myitem?email=${email}`;
            const {data} = await axios.get(url)
            setOrders(data)}
            getOrders()


    },[user])
        
        
         

    return (
        <div className='container'>


            
        </div>
    );
};

export default MyAddedItems;