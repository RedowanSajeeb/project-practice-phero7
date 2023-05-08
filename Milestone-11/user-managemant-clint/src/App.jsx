
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [user,setUser] = useState([])

  useEffect(()=>{
    fetch("http://localhost:2000/users")
    .then(res => res.json())
    .then(data => setUser(data))
  },[])


  const formHadel = (event) =>{
    event.preventDefault()
    const user = event.target;
    const name = user.name.value;
    const email = user.email.value;

 const userr ={name, email}

    console.log(userr);
    fetch('http://localhost:2000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },  
      
      body: JSON.stringify(userr)
  },
  
        
    )
    .then(res => res.json())
    .then(data => {
     console.log(data)
      const newUser = [...user , data]
    setUser(newUser)
    user.reset()
    })
   
     

  }

  return (
    <>
      <h1>User Management System</h1>
      <h5>User {user.length}</h5>

<form onSubmit={formHadel}>

<input type="text" name='name' id='' />
<br />
<input type="email" name='email' id='' />
<br />
 <input type="submit" value="Add user" />


</form>

      {
        user.map(u => <h3 key={u.id}>{u.name} : {u.email}</h3>)
      }
    </>
  );
}

export default App
