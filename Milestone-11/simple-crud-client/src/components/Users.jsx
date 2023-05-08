import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const data = useLoaderData()


    const handleDeleteUser = (_id) =>{
        console.log(_id);
        fetch(`http://localhost:4000/users/${_id}`,{
          method: 'DELETE',

        })
        .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.deletedCount > 0){
          alert("yahoo")

        }
      })
    }

    console.log(data);
    return (
      <div>
        {data.map((u) => (
          <h3 key={u._id}>
            {u.name} : {u.email} 
            
            <button
            onClick={() => handleDeleteUser(u._id)}
            >X</button>
          </h3>
        ))}
      </div>
    );
};

export default Users;