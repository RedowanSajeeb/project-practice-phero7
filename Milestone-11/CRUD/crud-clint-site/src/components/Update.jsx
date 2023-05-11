import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const oneUser = useLoaderData()
    console.log(oneUser);

const ubpdateForm = (event) =>{
    event.preventDefault();
    const form = event.target
    const name = form.name.value
    const email = form.email.value

    const data = {name , email}

    fetch(`http://localhost:300/users/${oneUser._id}`,{
        method : 'PUT',
        headers : { 'Content-type': 'application/json'},
        body : JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount > 0){
            alert("Updated")
        }
      });
}

    return (
      <div>
        <h1>Update</h1>
        <h1>{oneUser.name}</h1>
        <p>{oneUser.email}</p>

        <form onSubmit={ubpdateForm}>
          <input type="text" name="name" id="" defaultValue={oneUser?.name} />
          <br />
          <br />
          <input type="email" name="email" id="" defaultValue={oneUser?.email} />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
};

export default Update;