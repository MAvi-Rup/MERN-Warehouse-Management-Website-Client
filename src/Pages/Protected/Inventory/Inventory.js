import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import Title from '../../Header/Title/Title';



const Inventory = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/products/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [productId,product])

    const {sold,name,desc,suplier,price,quantity,img}=product;


    const manageQuantity = (e) => {
        e.preventDefault();
        const value = parseInt(e.target.quantity.value)
        const newQuantity = quantity+value;

        const updateProduct ={newQuantity}
        const url = `http://localhost:5000/products/${productId}`

        fetch(url, {
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            alert('Quantity added')
            e.target.reset()

        })



    }


    const handleDelivered = (e) => {
        e.preventDefault();
        const newQuantity = quantity-1;

        const updateProduct ={newQuantity}
        const url = `http://localhost:5000/products/${productId}`

        fetch(url, {
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            alert('Deleivered')
        })

    }

    return (
        <div className='container mb-4 mt-4'>
            <Title title="Inventory"></Title>

            <div className='row'>
                <Card className="text-center">
                    <img src={img} className="card-img-top w-25 mx-auto p-3" alt="Service Image" />
                    <Card.Body>
                        <Card.Title>Product Name: {name}</Card.Title>
                        <Card.Title>Price:{price} BDT</Card.Title>
                        <Card.Title>Product Left: {quantity}</Card.Title>
                        <Card.Text>
                            {desc}
                        </Card.Text>
                        <small className="text-muted">Suplier Name: {suplier}</small><br />
                        
                            <Button onClick={()=>{handleDelivered()}} variant="danger">Deliverd</Button>
                      
                    </Card.Body>
                    <Card.Footer className="text-muted fw-bold">Items Sold: {sold}</Card.Footer>
                </Card>

            </div>
            <div className='w-50 mx-auto'>
                <Form onSubmit={manageQuantity}>
                    <Form.Group className="mb-3">
                        <p className='text-center fs-4'>Restock Items</p>
                        <Form.Control type="number" name='quantity' autoComplete='off' className='bg-danger bg-opacity-50 text-white' placeholder="Restock Your quantity" />
                        <Button variant="danger w-50 mx-auto d-block mb-2 mt-2" type="submit">
                            Update Quantity
                        </Button>
                    </Form.Group>
                </Form>


            </div>

        </div>
    );
};

export default Inventory;