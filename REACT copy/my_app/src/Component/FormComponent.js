import React from "react";

function FormComponent(props) {
  return (
    <main>
      <h1>Your appeal to the Public Services</h1>
      <form className="inputForm">                
        <input
          placeholder="First Name"
          className="text"          
          name="firstName"  required
          onChange={props.handleChange}
          value={props.firstName} 
        />
        <br />
        <input
          className="text"
          onChange={props.handleChange}
          name="lastName" required
          placeholder="Last Name"
          value={props.lastName}
        />
        <br />
        <input
          className="number"
          onChange={props.handleChange}
          name="id" required
          placeholder="Citizen id"
          value={props.id}
        />
        <br />
        <input
          className="text"
          onChange={props.handleChange}
          name="address" required
          placeholder="Your post address"
          value={props.address}
        />
        <br />
        <input
          className="email"
          onChange={props.handleChange}
          name="email" required
          placeholder="Your email"
          value={props.email}
        />
        <br />
        <br />
        <label>
          <input
            className="radio"
            type="radio"
            name="visit"
            value="first"
            checked={props.visit === "first"}
            onChange={props.handleChange}
          />
          First visit within one appeal. 
          Please let us know within 3 months whether you are satisfied or not.
        </label>
        
        <label>
          <br />
          <input
            className="radio"
            type="radio"
            name="visit"
            value="second"
            checked={props.visit === "second"}
            onChange={props.handleChange}
          />
          Second visit within one appeal
        </label>
        <br />
        <br />
        <label className="serviceType-header">Select way to define the Public Service contact</label>
        <br />
        <select
          className="serviceType-input"          
          name="serviceType" required
          onChange={props.handleChange}
          value={props.serviceType} 
        >
          <option value=""></option>
          <option value="serviceName">The Service Name and Address</option>
          <option value="keyWords">Key Words, f.e. health, education, streets cleaning, etc.</option>         
        </select>
        <br />        
        <input
          placeholder="Service Name and Address"    
          className="text"
          name="serviceName"                
          onChange={props.handleChange}     
          value={props.service}
        />
        
        <input
          placeholder="Service Key Words"
          className="text"          
          name="serviceKeyWords"
          onChange={props.handleChange}
          value={props.service}
        />        
        <br />
        <br />
        <label>
          <input
            className="radio"  
            type="radio"
            name="openness"
            value="open"
            checked={props.openness === "open"}
            onChange={props.handleChange}
          />
          Your appeal is open to publish on website 
        </label>
        
        <label>
          <br />
          <input
            className="radio"
            type="radio"
            name="openness"
            value="hidden"
            checked={props.openness === "hidden"}
            onChange={props.handleChange}
          />
          Your appeal is hidden and only its register number will be published
        </label>
        
        
        <textarea name="appealContent" rows="15" cols="125" onChange={props.handleChange} value={props.appealContent} required></textarea>
        <br />
        <label className="satisfaction-title">Are you satisfied?</label>
        <br />
        <label>
          <input
            className="radiobutton"  
            type="radio"
            name="satisfaction" required
            onChange={props.handleChange}
            value="yes"
            checked={props.satisfaction === "yes"}            
          />
          Yes 
        </label>
        
        <label>
          <input
            className="radiobutton"
            type="radio"
            name="satisfaction" required
            onChange={props.handleChange}
            value="no"
            checked={props.satisfaction === "no"}  
          />
          No
        </label>
        <br />
        <input type="datetime-local" className="datetime-local" name="appealDate" placeholder="Date of appeal"
          onChange={props.handleChange}
          value="today"
          iputted={props.appealDate === "today"}
        />
        <button className="submit">Submit</button>        
      </form>
      
      <hr />
      <div className="entered-info">
        <h3>Entered information:</h3>
        <p>Your name: {props.firstName} {props.lastName}</p>        
        <p>Your id: {props.id}</p>
        <p>Your address: {props.address}</p>
        <p>Your email: {props.email}</p>
        <p>Your visit (or first or second): {props.visit}</p>
        <p>Your Public Service type (or name or key words): {props.serviceType}</p> 
        <p>Your Public Service: {props.service}</p>
        <p>Your openness (or yes or no): {props.openness}</p>
        <p>Your Date of appeal: {props.appealDate}</p>   
        <p>Your appeal content: {props.appealContent}</p>  
        <p>Your satisfaction (or yes or no): {props.satisfaction}</p>   
      </div>
    </main>
  );
}

export default FormComponent;