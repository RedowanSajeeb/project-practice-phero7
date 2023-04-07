import React from 'react';
import "/src/Components/Friends/Frien.css";
import { Link } from 'react-router-dom';
const Friend = ({ frnd }) => {
    console.log(frnd);
  return (
    <div className="frtiend">
      <h1>Friend Name : {frnd.name}</h1>
      <h4>username:{frnd.username}</h4>
      <p>email:{frnd.email}</p>
      <h5>phone:{frnd.phone}</h5>
      <a href={frnd.website}>website</a>
      <h5>company:{frnd.company.name}</h5>
      <p>
        <Link to={`/friend/${frnd.id}`}>dtls</Link>
      </p>
    </div>
  );
};

export default Friend;