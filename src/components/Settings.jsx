import React, { useState } from "react";
import toast from "react-hot-toast";
import {  useDispatch, useSelector } from "react-redux";
import { saveDocPosition } from "../store/action";

const Settings = () => {
  const {userData} = useSelector((e)=>e.userReducer)
  const [inputvalue,setInputValue] = useState(userData?.userdetailes?.position||"N/A")
  const dispatch = useDispatch()
  const handleSubmit =(e)=>
  {
    e.preventDefault();
    saveDocPosition(dispatch,inputvalue)
  }
  return (
    <>
         <div className="flex font-serif">
         <form onSubmit={handleSubmit}  className="flex flex-col w-[50%] p-6 border-r-2 ">
        <span className="flex mb-2 pl-10  font-normal font-serif text-xl ">
          Position:
        </span>
        <span className="flex pl-10">
          <input
          value={inputvalue}
          onChange={(e)=>
            setInputValue( e?.target.value)
           
          }
            type="text"
            required
            className="w-64 pl-3 mr-1 outline-none shadow-sm p-1 rounded-md border-gray-300 border-2"
          />
          <button  className="bg-slate-600 rounded-lg p-2 px-4 hover:bg-slate-700 text-gray-200">Save</button>
        </span>
      </form>
          <span className="flex items-center justify-center px-3 pt-5 text-lg ">The appointment are booked on daily basis everyday can be a new appointment</span>
         </div>
      
    </>
  );
};

export default Settings;
