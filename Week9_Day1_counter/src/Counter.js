import React from 'react';
import {connect} from 'react-redux';
import {addOne,minusOne} from './redux/actions';
class Counter extends React.Component {
    // constructor(){
    //     super();
    //     // this.state ={
    //     //     counter:0
    //     // }
    // }
    // addOne = ()=> {
    //     this.setState({counter:++this.state.counter})
    // }
    // minusOne = () => {
    //     this.setState({counter:this.state.counter - 1})
    //   }
    render(){
        const {counter,addOne,minusOne} = this.props
        return(
            <>
            <div>
                <h1>{counter}</h1>
            </div>
            <button onClick={addOne}>Plus</button>
            <button onClick={minusOne}>Minus</button>
            </>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addOne: () => dispatch(addOne()),
    minusOne: () => dispatch(minusOne())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
