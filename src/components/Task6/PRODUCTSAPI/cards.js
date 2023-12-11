import { Component } from "react";




class CardsTemplate extends Component{
    render(){
        return(
            <>
            <div className="card m-2" style={{ width: "calc(25% - 16px)" }}>
              <img src={this.props.img} height={300} alt={this.props.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text">{this.props.dis}</p>
                <p className="card-text">{this.props.price}</p>
              </div>
            </div>
            </>
        )
    }
}
export default CardsTemplate