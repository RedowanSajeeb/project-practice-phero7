import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const user = useLoaderData()

    const handeluodateForm = (event) =>{
        event.preventDefault();
        const form = event.target;

        const name = form.name.value
        const email = form.email.value;

        console.log(name, email);
        const ubdateUsaer = {name,email};
        fetch(`http://localhost:4000/users/${user._id}`,{
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(ubdateUsaer)
            
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if(data.modifiedCount > 0){
                alert("up-Done")
            }
            
          });
    }


    return (

      <div>
        {user.name}
        <form onSubmit={handeluodateForm}>
          <input type="text" name="name" id="" defaultValue={user?.name} />
          <br />
          <input
            type="email"
            name="email"
            id=""
            defaultValue={user?.email}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
};

export default Update;