import React, { Component } from "react";
import FormComponent from "./FormComponent";

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      id: "",
      address: "",
      email: "",
      visit: "",
      serviceType: "",
      service: "",
      openness: "",
      appealDate: "",
      appealContent: "",
      satisfuction: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    
    const { value, name, type, checked } = e.target;      //inputted is about date
    console.log(e.target.name, e.target.value)
    
/*    if (props.visit==="second") {             //at the same time is available only one input from two, I disabled it only to see picture on screen
    
      <select name="serviceType" disabled></select>;            //setState??
      <input name="serviceName" disabled/>;
      <input name="serviceKeyWords" disabled/>;    
      <input name="openness" disabled/>;
      <input name="appealDate" disabled/>;
      <textarea name="appealContent" disabled></textarea>
  
    } else {
      <input name="satisfaction" disabled/>
    };
    if (props.serviceType="serviceName") {      //at the same time is available only one input from two
      
      <input name="serviceKeyWords" disabled/>
    } else {
      <input name="serviceName" disabled/>
    }
*/
    //type === "radio"
    //  ? this.setState({ [name]: checked })   
    //  : this.setState({ [name]: value });
  } 
  render() {
    return <FormComponent handleChange={this.handleChange} {...this.state} />;
  }
}
export default FormContainer;