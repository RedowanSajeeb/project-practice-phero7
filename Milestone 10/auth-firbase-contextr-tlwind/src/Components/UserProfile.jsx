import React, { useContext } from 'react';
import AuthProvider, { AuthContext } from '../Providers/AuthProvider';

const UserProfile = () => {
    const{user} = useContext(AuthContext)
    console.log(user);
    return (
      <div>
        <img src={user.photoURL} alt="photox" />
      </div>
    );
};

export default UserProfile;