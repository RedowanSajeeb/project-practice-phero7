import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <ExtanUsers></ExtanUsers>
      
    </div>
  );
}
function ExtanUsers (){
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))

  },[]);
  return(
    <div>
      {/* <h1>N0{users.length}</h1> */}
    {
      users.map(user=> <User name={user.name} email={user.email} Phone={user.phone} Web={user.website}></User>)
    }
    </div>
  )
}

function User(props){
return(
  <div style={{border:'2px solid red', margin:'20px', borderRadius:"10px",padding:"20px"}}>
    <h3>Name: {props.name}</h3>
    <p>email:{props.email}</p>
    <p>Phone:{props.Phone}</p>
    <p>Web:{props.Web}</p>
  </div>
)
}

export default App;
