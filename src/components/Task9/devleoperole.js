import { Component } from "react";

class DeveloperRoles extends Component {
    constructor() {
        super();
        this.state = {
          originalArray: [
            { id: 1, name: "John", role: "React Developer" },
            { id: 2, name: "Jane", role: "JS Developer" },
            { id: 3, name: "Jack", role: "Java Developer" },
            { id: 4, name: "ram", role: "React Developer" },
            { id: 5, name: "Jole", role: "JS Developer" },
            { id: 6, name: "sam", role: "Java Developer" },
            { id: 7, name: "hanu", role: "React Developer" },
            { id: 8, name: "sams", role: "JS Developer" },
            { id: 9, name: "sema", role: "Java Developer" },
            { id: 10, name: "werner", role: "React Developer" },
            { id: 11, name: "rolls", role: "React Developer" },
            { id: 12, name: "baje", role: "Java Developer" },
          ],
          details: [],
        };
      }
    
      componentDidMount() {
        // Initialize details with the original data
        this.setState({
          details: [...this.state.originalArray],
        });
      }
    
      handleClick = (role) => {
        let newDetails;
        if(role === "ALL"){
          newDetails=[...this.state.originalArray]
        }
        else newDetails=this.state.originalArray.filter((value) => value.role === role);
    
        this.setState({
          details: newDetails,
        }, () => console.log(this.state.details));
      };
    

  render() {
    return (
      <>
        {["ALL","React Developer","Java Developer","JS Developer"].map(ROLE=><Button onClick={this.handleClick} employrole={ROLE} key={ROLE}/>)}
        <table className="table table-light table-bordered m-1">
          <thead>
            <tr>
              <th className="table-success" scope="col">ID</th>
              <th className="table-success" scope="col">NAME</th>
              <th className="table-success" scope="col">ROLE</th>
            </tr>
          </thead>
          <tbody>
            {this.state.details.map((person,id) => {
              return (
                <tr scope="row" key={id}>
                  <td>{person.id}</td>
                  <td>{person.name}</td>
                  <td>{person.role}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}
export default DeveloperRoles;

class Button extends Component{
    render(){
        return(
            <button onClick={()=>this.props.onClick(this.props.employrole)} className="btn btn-primary m-3">{this.props.employrole}</button>
        )
    }
}
