import React from "react";
import { doc_img_url, logouthandler, patient_img_url } from "../constant";

const Profile = ({ role, userData }) => {
   const imageUri = (role== "DOCTER") ? doc_img_url : patient_img_url;
  return (
    <>
      <div className="w-full  dark:text-white">
        <div className="w-full   bg-[#5552a9] mb-3">
          <div className="  flex justify-end items-end pr-4     ">
            <button onClick={logouthandler} className="mt-8  border-2 rounded-full px-5 shadow-md   text-center hover:bg-red-500 py-1">
              Logout
            </button>
          </div>
          <div className="flex justify-center items-center ">
            <img
              className="w-36 shadow-md rounded-full"
              src={imageUri}
              alt=""  
            />
          </div>
          <div className="flex  justify-center items-center ">
           <div className="flex flex-col pl-10 my-2 ">
          <span className="flex font-serif " > <strong className="pr-1">Name : </strong>{userData?.name}</span>
           <span className="flex  font-serif"> <strong className="pr-1">Email :</strong> {userData?.email}</span>
           <span className="flex  font-serif "><strong className="pr-3">Role  :</strong> {userData?.role}</span>
            </div> 
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Profile;
