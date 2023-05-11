import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const lodadeUser = useLoaderData()
    const [users,setData] = useState(lodadeUser)

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

          const remaining = users.filter(d => d._id !== _id)
          setData(remaining)

        }
      })
    }

    // console.log(users);
    return (
      <div>
        {users.map((u) => (
          <h3 key={u._id}>
            {u.name} : {u.email} 
            <Link to={`/users/${u._id}`}>

            <button>
          Update
            </button>
            </Link>
            <button
            onClick={() => handleDeleteUser(u._id)}
            >X</button>
          </h3>
        ))}
      </div>
    );
};

export default Users;