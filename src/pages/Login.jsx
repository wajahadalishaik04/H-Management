import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../store/action";
import { useDispatch } from "react-redux";

const Login = () => {
  const [loginformData,setloginformData] = useState({
    email:"",
    password:"",
  })
  const dispatch = useDispatch();
   const handlesubmit = (e) =>
  {
    e.preventDefault();
    console.log(loginformData);
    loginUser(dispatch,loginformData)

  }
  const onChangeHandler = (e) =>
  {
     const {name,value} = e.target
     setloginformData((prevdata)=>({...prevdata,[name]:value}))
  }
  return (
    <section class="bg-gray-700  ">
      <div class="flex flex-col items-center justify-center   px-6 py-8 mx-auto md:h-screen lg:py-0">
        <span className="bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent text-4xl mb-4 font-serif ">H-management</span>
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6  space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handlesubmit}>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  onChange={onChangeHandler}
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  onChange={onChangeHandler}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to={"/Signup"}
                  
                  class="font-medium text-primary-600 hover:underline hover:text-gray-200 dark:text-gray-400"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
