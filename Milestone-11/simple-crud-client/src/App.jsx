import { Link } from 'react-router-dom';
import './App.css'

function App() {

  const formSubmitHandel =(event) => {
      event.preventDefault();
      
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;

      const user = {name, email}

      console.log(user);

     fetch("http://localhost:4000/users",{
      method: 'POST',
      headers: {
      'content-Type':'application/json'
      },
      body: JSON.stringify(user)
     })
     .then(res => res.json())
     .then(data => {
      console.log(data);
     if(data.insertedId){
      alert('data Added successfully')
      form.reset()
     }
     })



  }



  return (
    <>
      <h1>Simple CruD!</h1>
      <Link to={'/users'}>Users</Link>
      <form onSubmit={formSubmitHandel}>
        <input type="text" name="name" id="" />
        <br />
        <h6>email</h6>
        <input type="email" name="email" id="" />
        <br />
        
        <input type="submit" value="Add Mongo People" />
      </form>
    </>
  );
}

export default App
