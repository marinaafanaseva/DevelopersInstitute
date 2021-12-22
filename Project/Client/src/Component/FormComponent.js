import React from "react";

function FormComponent(props) {
  return (
    <main>
      <h1>Your appeal to the Public Services under NGO support</h1>
     
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
          name="citizenId" required
          placeholder="Citizen id"
          value={props.citizenId}
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
          type = "email"
          className="email"
          onChange={props.handleChange}
          name="email" required
          placeholder="Your email"
          value={props.email}
        />
        
        <br />
        <label>
          <input
            className="radio"
            type="radio"
            name="visit" required
            value="first"
            checked={props.visit === "first"}
            onChange={props.handleChange}
          />
          First visit within one appeal. 
          Please let us know within 3 months whether you are satisfied or not
        </label>
        
        <label>
          <br />
          <input
            className="radio"
            type="radio"
            name="visit" required
            value="second"
            checked={props.visit === "second"}
            onChange={props.handleChange}
          />
          Second visit within one appeal
        </label>
        <br />
        <br />
        
        <label className="serviceName-title">Fill in the first or both fields. 
        If you put key words, we use just it to define the Public Service contact</label>
        <br />
        <input             
          className="text"
          name="serviceName" required    
          placeholder="Service Name and Address"           
          onChange={props.handleChange}     
          value={props.serviceName} disabled={props.disabledSecondTime}
        />
        <input
          placeholder="Service Key Words"
          className="text"          
          name="serviceKeyWords"
          onChange={props.handleChange}
          value={props.serviceKeyWords} disabled={props.disabledSecondTime}
        />            
        <br />
        <br />
        <label>
          <input
            className="radio"  
            type="radio"
            name="openness" required
            value="open"
            checked={props.openness === "open"}
            onChange={props.handleChange} disabled={props.disabledSecondTime}
          />
          Your appeal is open to publish on website 
        </label>
        
        <label>
          <br />
          <input
            className="radio"
            type="radio"
            name="openness" required
            value="hidden"
            checked={props.openness === "hidden"}
            onChange={props.handleChange} disabled={props.disabledSecondTime}
          />
          Your appeal is hidden and only its register number will be published
        </label>

        
        <textarea name="appealContent" rows="15" cols="125" onChange={props.handleChange} value={props.appealContent} disabled={props.disabledSecondTime}
          required placeholder="Your appeal content">
        </textarea>
        <br />
        <label className="satisfaction-title">Are you satisfied?</label>
        <br />
        <label>
          <input
            className="radiobutton"  
            type="radio"
            name="satisfaction" 
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
            name="satisfaction" 
            onChange={props.handleChange}
            value="no"
            checked={props.satisfaction === "no"}  
          />
          No
        </label>
        <br />
        <input type="datetime-local" className="datetime-local" name="appealDate" placeholder="Date of appeal"
          onChange={props.handleChange}
          value={props.appealDate} disabled={props.disabledSecondTime}
          //iputted={props.appealDate === "today"}
        />
        <button className="submit">SUBMIT</button>        
      </form>
      
      <hr />
      <div className="entered-info">
        <h3>Entered information:</h3>
        <p>Your name: {props.firstName} {props.lastName}</p>        
        <p>Your id: {props.citizenId}</p>
        <p>Your address: {props.address}</p>
        <p>Your email: {props.email}</p>
        <p>Your visit (or first or second): {props.visit}</p>
        <p>Your Public Service: {props.serviceName}</p>
        <p>Your Public Service: {props.serviceKeyWords}</p>
        <p>Your openness (or yes or no): {props.openness}</p>
        <p>Your Date of appeal: {props.appealDate}</p>   
        <p>Your appeal content: {props.appealContent}</p>  
        <p>Your satisfaction (or yes or no): {props.satisfaction}</p>   
      </div>
    </main>
  );
}

export default FormComponent;