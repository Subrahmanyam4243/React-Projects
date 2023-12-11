import { Component } from "react";




class ButtonComponent extends Component{
    state={
        isSubscribe:false,
        text:"Subscribe"
    }
    handleClick=()=>{
        this.setState(
            {
                isSubscribe:!this.state.isSubscribe,
                text:this.state.isSubscribe?"Subscribe":"thanks"
            },
        )
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick} style={
                    {
                        backgroundColor:this.state.isSubscribe?"Green":"red",
                        color:"white",
                        margin:20,
                        border:"1px solid transparent",
                        width:this.state.isSubscribe?150:80
                    }
                }>{this.state.text}</button>
            </div>
        )
    }
}

export default ButtonComponent