import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'



function CarouselPostPage(props) {


    const carouselItem = {
        width: "1065px",
        height: "450px"

    };

    return (
        <>

            <div className="row" style={{ width: "1065px", height:"450px" }}>

                <Carousel>
                    <Carousel.Item style={carouselItem}>
                        <img style={carouselItem}
                            className="d-block w-100"
                            src="https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={carouselItem}>
                        <img style={carouselItem}
                            className="d-block w-100"
                            src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
                           alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={carouselItem}>
                        <img style={carouselItem}
                            className="d-block w-100"
                            src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_touching_human_hand_other/1800x1200_cat_touching_human_hand_other.jpg?resize=750px:*"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
        </>
    );

}

export default CarouselPostPage;