import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../store/action";

const Signup = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const callback = () =>
  {
    navigate('/login')
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    signupUser(dispatch, formData,callback);
  };
  const onChangehandler = (e) => {
    const { name, value } = e.target;
    setformData((prevdata) => ({ ...prevdata, [name]: value }));
  };
  return (
    <div className="w-full h-screen">
      <section className="h-[100%] bg-gray-700">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <span className="bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent text-4xl mb-2 font-serif">
            H-Management
          </span>

          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className=" space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form className="space-y-4 md:space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label
                    for="name"
                    className="block  text-sm mb-1 font-medium text-gray-900 dark:text-white"
                  >
                    Your Name:
                  </label>
                  <input
                    type="text"
                    onChange={onChangehandler}
                    name="name"
                    id="name"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>

                <div>
                  <label
                    for="email"
                    className="block  text-sm mb-1 font-medium text-gray-900 dark:text-white"
                  >
                    Your email:
                  </label>
                  <input
                    type="email"
                    onChange={onChangehandler}
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password:
                  </label>
                  <input
                    type="password"
                    onChange={onChangehandler}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="countries"
                    class="block  text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select an option:
                  </label>

                  <select
                    id="role"
                    name="role"
                    onChange={onChangehandler}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Select a Role</option>
                    <option value="DOCTER">DOCTER</option>
                    <option value="PATIENT">PATIENT</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 hover:focus:none focus:outline-none focus:ring-red-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to={"/login"}
                    className="font-medium text-primary-600 hover:underline hover:text-gray-200 dark:text-primary-500"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
