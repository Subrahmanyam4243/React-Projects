import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from "./blogbanners.jpg"
import image2 from "./image.jpg"
import image3 from "./mcdonaldslunchdinner.jpg"
class DemoCarousel extends Component {
    render() {
        const carouselStyle = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%', // Adjust the width as needed
            margin: 'auto', // Center horizontally
        };

        return (
            <div style={carouselStyle}>
                <Carousel showIndicators={true}>
                    <div>
                        <img src={image1} alt="Legend 1" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src={image2} alt="Legend 2" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src={image3} alt="Legend 3" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default DemoCarousel;