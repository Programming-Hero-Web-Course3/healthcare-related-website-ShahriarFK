import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/Banner/banner-1.jpg'
import banner4 from '../../../images/Banner/banner-2.jpg'
import banner3 from '../../../images/Banner/banner-3.jpg'

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Why we're one of leading EYE Hospital in the world?</h3>
                        <p>We've world's best surgeon for your treatment and also we've best equipments for successful operations.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={banner3}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Why Choose The AI Vision Clinic?</h3>
                        <p>At the AI Vision Clinic, we combine world-leading clinical expertise with most cutting-edge technology in eye care. Artificial intelligence (AI) is utilised where possible to optimise treatment outcomes.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={banner4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Why Choose Melbourne EYE Hospital?</h3>
                        <p>In our hospital, we combine world-leading clinical expertise with most cutting-edge technology in eye care. Because We Care About Our Patient. Artificial intelligence (AI) is utilised where possible to optimise treatment outcomes.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;