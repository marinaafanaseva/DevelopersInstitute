import React from 'react';
import User from './User';
import {connect} from 'react-redux';
import {getUsers} from './redux/actions'

class UsersList extends React.Component {
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=>{
        this.props.getUsers(data)
    })
  }
  render(){
    const {users,text} = this.props
    const filter = users.filter(item=>{
      return item.name.toLowerCase().includes(text.toLowerCase())
    })
    return (
      <>
        {
            filter.map( (item,i) => {
              return <User user={item} key={i}/>
            })
        }
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    text: state.text,
    users: state.arr
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: (data) => dispatch(getUsers(data))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(UsersList)
