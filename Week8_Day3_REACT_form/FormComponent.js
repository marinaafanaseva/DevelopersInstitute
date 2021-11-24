//src/FormComponent.js

const FormComponent = (props) => {
let { inputs } = props;
//console.log (‘http://localhost:3000/?firstName=John&lastName=Doe&age=25&gender=male&destination=Japan&lactoseFree=on‘)

    return  (
<form>  
    <input type="text" name="name" />
    <input type="number" name="age" />

    <input type="radio" name="gender" value="male" />
    <input type="radio" name="gender" value="female" />

    <input type="select" name="destination" value="Thailand" />
    <input type="select" name="destination" value="Japan" /> 
    <input type="select" name="destination" value="Brazil" />

    <input type="checkbox" name="dietary restrictions" value="Nuts free" />
    <input type="checkbox" name="dietary restrictions" value="Lactose free"/>
    <input type="checkbox" name="dietary restrictions" value="Vegan meal" />
  
    <input type="submit" value="Submit" />
</form>     
     )
}
   
export default FormComponent;

