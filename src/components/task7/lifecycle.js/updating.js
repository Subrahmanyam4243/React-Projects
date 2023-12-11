import { Component } from "react";




class UpdatingPhase extends Component{
    constructor(){
        super()
        this.state={
            number:0
        }
    }
    HandleClick=()=>{
        this.setState({
            number:this.state.number+1
        })
    }
    shouldComponentUpdate(){
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log(prevState)
    }
    componentDidUpdate(){
        document.title=`Ecommerce ${this.state.number}`
    }
    componentDidMount(){
        document.title=`Ecommerce ${this.state.number}`
    }
    render(){
        return(
            <>
            <p>NUMBER: {this.state.number}</p>
            <button onClick={this.HandleClick}>CLICKHERE</button>
            </>

        )
    }
}
export default UpdatingPhase