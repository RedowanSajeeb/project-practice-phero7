import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDtls = () => {
    const friend = useLoaderData();
    // console.log(friend);
    return (
      <div>
        <h1>dtl page!!</h1>
        <h3>name:{friend.name}</h3>
        <p>phone:{friend.phone}</p>
        <h6>username:{friend.username}</h6>
      </div>
    );
};

export default FriendDtls;