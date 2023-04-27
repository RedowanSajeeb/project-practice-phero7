import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Register = () => {
  const { createUser } = useContext(AuthContext);
  // console.log(createUser);

    const registerHendelBtn =(event)=>{
        event.preventDefault();
        const reg = event.target;
        const name = reg.name.value;
        const email = reg.email.value;
        const password = reg.password.value;
        console.log(name,email,password);
        createUser(email, password)
          .then((result) => {
            // Signed in
            const user = result.user;
            console.log(user);
          })
          .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
          });
    }
    return (
      <div>
        <div>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold w-96 ms-5">Register now!</h1>
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={registerHendelBtn}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">name*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="input input-bordered"
                      name="name"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      name="email"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password*</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      className="input input-bordered"
                      name="password"
                      required
                    />
                    <label className="label">
                      <Link
                        to={"/login"}
                        className="label-text-alt link link-hover"
                      >
                        Already Have Acc?
                      </Link>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;