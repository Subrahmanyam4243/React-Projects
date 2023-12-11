import { Component } from "react";



class UnmountPhase extends Component{
    constructor(){
        super()
        this.state={
            condition:false
        }
    }
    handleClick=()=>{
        this.setState({
            condition:!this.state.condition
        })
    }


    render(){
        return(
            <>
            {
                this.state.condition?<UnmountChild/>:<p>Removechild</p>
            }
            <button onClick={this.handleClick}>click</button>
            </>
        )
    }
}
export default UnmountPhase

class UnmountChild extends Component{
    componentWillUnmount(){
        alert("remove node")
    }

    render(){
        return(
            <>
            <h1>HELLO</h1>
            
            </>
        )
    }
}


