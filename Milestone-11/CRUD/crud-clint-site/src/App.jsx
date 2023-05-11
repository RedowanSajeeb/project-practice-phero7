import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const handelFormInput = (event) => {
    event.preventDefault();
    const input = event.target;
    const name = input.name.value;
    const email = input.email.value;
    console.log(name, email);
const postdata = {name, email};
    fetch("http://localhost:300/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postdata)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if(data.acknowledged){
          alert("user added successfully")
          input.reset()
        }
      });
  };

  return (
    <>
      <h1>Crud</h1>
      <Link to={"/users"}>
        <button>Users Page</button>
      </Link>
      <form onSubmit={handelFormInput}>
        <input type="text" name="name" placeholder="Your Name"></input>
        <br />
        <input type="email" name="email" placeholder="red@gmail.com"></input>

        <input type="submit"></input>
      </form>
    </>
  );
}

export default App;
