import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../assets/images/instore1.jpg';
import image2 from '../assets/images/instore2.jpg';
import image3 from '../assets/images/instore3.jpg';


function CarouselComponent(props) {

    const interValTiming = 1000;

    return (
        //Display three images from the instore
        <div style={{display: 'block', width: 500, padding: 30,}}>
            <h4>Store Locations</h4>
            <Carousel>
                <Carousel.Item interval={interValTiming}>
                    <img
                        className="logo-image-courasel"
                        src={image1}
                        alt="Instore One"
                    />
                    <Carousel.Caption className={"courasel-text"}>
                        <h3>Johannesburg store</h3>
                        <p>21 Main Street, Sandton</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={interValTiming}>
                    <img
                        className="logo-image-courasel"
                        src={image2}
                        alt="Instore Two"
                    />
                    <Carousel.Caption className={"courasel-text"}>
                        <h3 >Cape Town store</h3>
                        <p>1 Oceanview lane, Cape Town</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={interValTiming}>
                    <img
                        className="logo-image-courasel"
                        src={image3}
                        alt="Instore Three"
                    />
                    <Carousel.Caption className={"courasel-text"}>
                        <h3>Oudtshoorn store</h3>
                        <p>232 Van Riebeeck street, Oudtshoorn</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>);
}

export default CarouselComponent;