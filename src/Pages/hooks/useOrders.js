import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const useOrders =()=>{
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    
    const email = user?.email;
    useEffect(() => {
        const url = `http://localhost:5000/myitem?email=${email}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    }, [email,orders])
    return [orders,setOrders,user]

}
export default useOrders;