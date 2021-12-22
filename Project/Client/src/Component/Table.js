import React, { Component } from "react";
import Table from "./Table";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      serviceName: "",
      //serviceKeyWords: "",
      serviceContact: "",
      //openness: "",
      appealDate: "",
      appealContent: "",
      responseText: "",
      responseDate: "",
      satisfuction: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    
    const { value, name, type, checked } = e.target;                        
    console.log(e.target.name, e.target.value)       
    
  } 
  render() {
    return (
    <h2>Citizen Appeals to the Public Services</h2>,
    <table id="example" class="table table-striped" >
        <thead>
            <tr>
                <th>Date of appeal</th>
                <th>Citizen id</th>
                <th>Appeal context if it's open</th>
                <th>Service name or Key words</th>
                <th>Service contact</th>
                <th>Response text if it's open</th>
                <th>Date of response</th>
                <th>Citizen satisfaction via 3 months</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="datetime-local" name="appealDate" onChange={props.handleChange} value={props.appealDate}></td>  
                <td className="number" name="citizenId" onChange={props.handleChange} value={props.citizenId}></td>
                <td className="text" name="appealContext" onChange={props.handleChange} value={props.appealContext}></td>
                <td className="text" name="serviceName" onChange={props.handleChange} value={props.serviceName}></td>
                <td className="text" name="serviceContact" onChange={props.handleChange} value={props.serviceContact}></td>
                <td className="text" name="responseText" onChange={props.handleChange} value={props.responseText}></td>
                <td className="date" name="responseDate" onChange={props.handleChange} value={props.responseDate}></td>
                <td className="boolean" name="satisfuction" onChange={props.handleChange} value={props.satisfuction}></td>        
            </tr>            
        </tbody>
    </table> 
    ); 
  
    //handleChange={this.handleChange} {...this.state} />;
  }
}
export default Table;