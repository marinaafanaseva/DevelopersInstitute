import React from 'react';
import './App.css';
import FormComponent from './ FormComponent ';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            gender: "",
            destination: "",
            dietaryRestrictions: {
                nutsFree: "",
                lactoseFree: "",
                veganMeal: "",
            }
        };
    }

handleChange = event => {                   //event=submit     
    return (event.target.value);
           ( {dietaryRestrictions} ? {yes : no} )       
}

render() {
    return (
        <div>
            <a href="http:localhost:3000/?firstName=John&lastName=Doe&age=25&gender=male&destination=Japan&lactoseFree=on"></a>
        </div> 
    )    
}
};

export default App;