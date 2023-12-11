import axios from "axios";
import { Component } from "react";
import CardsTemplate from "./cards";

class ApiProducts extends Component {
  state = {
    array: [],
  };
  handleClick = () => {
    axios.get("https://fakestoreapi.com/products").then((response)=>{
        this.setState({
            array:response.data
        })
    })
  }

  render() {
    // console.log(this.state.array, "DATA OF API")
    return (
      <>
        <button className="btn btn-primary" onClick={this.handleClick}>
          SEE MORE
        </button>
        <div className="d-flex align-content-center justify-content-center flex-wrap">
            {
                this.state.array.length>0 && this.state.array.map((products)=>{
                    return(
                        <CardsTemplate img={products.image} title={products.title} dis={products.description} price={products.price}/>
                    )
                })
            }
        </div>
      </>
    );
  }
}
export default ApiProducts;
