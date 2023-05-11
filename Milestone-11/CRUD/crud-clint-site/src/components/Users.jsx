import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const user = useLoaderData()
const [data, setData] = useState(user);
  const xdelate = _id =>{
    console.log(_id);
    fetch(`http://localhost:300/users/${_id}`,{

        method: "DELETE",


    })
    .then(res => res.json())
    .then(dataa => {
        console.log(dataa);
        if(dataa.deletedCount > 0){
            alert('deleted deleted count successfully')
 
            const remaining = data.filter(user => user._id !== _id);
            setData(remaining)
        }
    })
  }



    return (
      <div>
        {data.map((d) => (
          <div key={d._id}>
            <h3>{d.name}</h3>
            <h5>
              {d.email} : {d._id}
            </h5>
            <Link to={`/user/update/${d._id}`}>
             
              <button>User Update</button>
            </Link>
            <button onClick={() => xdelate(d._id)}>Xd</button>
          </div>
        ))}
      </div>
    );
};

export default Users;