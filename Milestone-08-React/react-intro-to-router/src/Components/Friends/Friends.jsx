import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from './Friend';

const Friends = () => {
    const datauser = useLoaderData()
    // console.log(datauser);
    return (
        <div>
           <h1>No Friends!</h1> 
           {
            datauser.map(frnd => <Friend
            
            key={frnd.id}
            frnd={frnd}
            
            ></Friend>)
           }
        </div>
    );
};

export default Friends;