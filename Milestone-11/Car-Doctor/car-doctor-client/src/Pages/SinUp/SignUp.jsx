// import React from 'react';
import { Link } from "react-router-dom";
import img from "./../../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import SholLogin from "../Home/Home/Sheard/SholLogin";

const SignUp = () => {
const {createUser} = useContext(AuthContext)
    const handelOnSubmitFromSinup = (event) => {
      event.preventDefault();
      const fromSub = event.target;
      const name = fromSub.name.value;
      const email = fromSub.email.value;
      const password = fromSub.password.value;

      console.log(email, password , name);

      createUser(email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          if (user) {
            // alert(';dd')
          toast.success("Success Sign Up !", {
            position: toast.POSITION.TOP_RIGHT,
          });
          }
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode,errorMessage);
          if(error){
                toast.error(`${errorMessage,errorCode}`, {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
            }
          // ..
        });


    };

    return (
      <div className="hero min-h-screen">
        <div className="hero-content  flex-col lg:flex-row">
          <div className="md:mr-5 md:w-1/2 ">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 h-full mb-10 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-4xl text-center font-bold">Sign UP</h1>
              <form onSubmit={handelOnSubmitFromSinup}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Confirm Password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn w-full btn-outline bg-red-600  mr-6 text-white ">
                    SignUp
                    {<ToastContainer />}
                  </button>
                </div>
              </form>
              <div className="text-center font-bold mt-5">
                <h6>Or Sign In with</h6>
              </div>
              <SholLogin></SholLogin>
              <div className="text-center mt-5">
                <h4>
                  Already have an account?{" "}
                  <span className="text-red-600 font-bold">
                    <Link to={"/login"}>Login</Link>
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;