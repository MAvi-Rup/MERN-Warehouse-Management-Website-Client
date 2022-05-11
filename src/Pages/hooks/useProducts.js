import { useEffect, useState } from "react";

const useProducts =()=>{
    const [products, setProduct] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/products`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [])
    return [products,setProduct]
}
export default useProducts;