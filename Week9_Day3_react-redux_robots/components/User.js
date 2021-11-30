const User = (props) =>{
  const {user} = props;
  const {name,email,username,id} = user;
  return (
    <div className='dib'>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <h4>{user.username}</h4>
    </div>
  )
}
export default User
