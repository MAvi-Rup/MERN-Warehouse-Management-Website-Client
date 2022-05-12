import { useEffect, useState } from "react";

const useProducts =()=>{
    const [products, setProduct] = useState([])
    useEffect(() => {
        const url = `https://arcane-earth-34229.herokuapp.com/products`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [])
    return [products,setProduct]
}
export default useProducts;