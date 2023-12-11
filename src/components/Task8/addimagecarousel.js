import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "./image.jpg";
import image2 from "./images.jpg";
import image3 from "./mcdonaldslunchdinner.jpg";
import image4 from "./blogbanners.jpg";
import image5 from "./banne.png";

class AddImage extends Component {
  constructor() {
    super();
    this.state = {
      imagearray: [image1, image2, image3],
      currentindex:0
    };
  }

  handleClick=()=>{
    // debugger

    const images = [image4, image5,image1,image2];  
    this.setState({
        imagearray:[...this.state.imagearray,images[this.state.currentindex]],
        currentindex:this.state.currentindex+1
    })
  }


  render() {
    const carouselStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "50%",
      margin: "auto",
      height:"3%"
    };

    return (
      <>
        <button onClick={this.handleClick} className="btn btn-success m-auto">AddImage</button>
        <div style={carouselStyle}>
          <Carousel showIndicators={true}>
            {this.state.imagearray.map((banner) => {
              return (
                <div key={banner}>
                  <img src={banner} alt="Legend 1" />
                  <p className="legend">Legend 1</p>
                </div>
              );
            })}
          </Carousel>
        </div>
      </>
    );
  }
}
export default AddImage;
