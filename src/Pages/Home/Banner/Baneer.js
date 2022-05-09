import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Baneer = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);}
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='./images/banner1.jpg'
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Our Warhouse Spaces !!</h3>
                    <p>We have our own huge area of warhouse and big area to organize our products properly.</p>
                </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='./images/banner3.jpg'
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='text-body'>We have warhouse for some special products.</h3>
                    <p className='text-body'>
                        We have our own special warhouse for our special products and we make deliver those products on day.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            {/* <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='./images/banner2.jpg'
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='text-dark'>Our special delivery system !!</h3>
                    <p className='text-body'>We make the fastes delivery system from our warhouse. Our supplychain management is too good.</p>
                </Carousel.Caption>
            </Carousel.Item> */}
        </Carousel>
    );
   
};

export default Baneer;