import React, { Component } from "react";
import FormComponent from "./FormComponent";

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      citizenId: "",
      address: "",
      email: "",
      visit: "",
      disabledSecondTime: false,
      serviceName: "",
      serviceKeyWords: "",
      openness: "",
      appealDate: "",
      appealContent: "",
      satisfuction: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    
    const { value, name, type, checked } = e.target;                        
    console.log(e.target.name, e.target.value)   
    
    console.log('checkbox',type,name,value);
    if(type === 'radio' && name === 'visit' && value === 'second'){
      this.setState({ disabledSecondTime: true })
    }
    else if(type === 'radio' && name === 'visit' && value === 'first'){
      this.setState({ disabledSecondTime: false })
    }
   
    type === "checkbox"
      ? this.setState({ [name]: checked })   
      : this.setState({ [name]: value });
      
  } 
  render() {
    return <FormComponent handleChange={this.handleChange} {...this.state} />;
  }
}
export default FormContainer;