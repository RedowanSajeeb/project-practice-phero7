import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const hendelLogout =()=>{
    logOut()
      .then(() => {})
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  }
    return (
      <div>
        <div className="navbar bg-primary text-primary-content">
          <a className="btn btn-ghost normal-case text-xl ">AuthBRo</a>
          <div className="mx-auto">
            <Link className="btn btn-ghost normal-case text-xl" to={"/"}>
              Home
            </Link>
            <Link className="btn btn-ghost normal-case text-xl" to={"/login"}>
              Login
            </Link>
            <Link
              className="btn btn-ghost normal-case text-xl"
              to={"/register"}
            >
              Register
            </Link>
            <Link className="btn btn-ghost normal-case text-xl" to={"/oder"}>
              Oder
            </Link>
           {user && <Link
              className="btn btn-ghost normal-case text-xl"
              to={"/userProfile"}
            >
              userProfile
            </Link>}
            {user ? (
              <div>
                <h4>{user.email}</h4>
                <button onClick={hendelLogout}>Sign Out</button>
              </div>
            ) : (
              <div>
                <Link to={"/login"}>LogIn</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
};

export default Header;