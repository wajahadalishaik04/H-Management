import React, { useEffect, useState } from "react";
import { doc_img_url } from "../constant";
import { useDispatch, useSelector } from "react-redux";
import { fetch_doctors_list } from "../store/action";
import toast from "react-hot-toast";
import AppPopup from "./AppPopup";

const DoctableList = () => {
  const { doctors } = useSelector((e) => e.tablelistDoctorReducer);
  const dispatch = useDispatch();
  const [doctorid,setDoctorid] =  useState("")

  const [doctorTabList, setdoctorTabList] = useState(doctors);
  const [searchinput, setsearchInput] = useState("");
const [ispopUp,setIsPopUp] = useState(false)
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    {
      setdoctorTabList(
        doctors.filter((e) => {
          if (
            e?.name.toLowerCase().includes(searchinput) ||
            e?.email.toLowerCase().includes(searchinput) ||
            e?.userdetailes?.position.toLowerCase().includes(searchinput)
          ) {
            return e;
          }
        })
      );
    }
  };
  useEffect(() => {
    if (!doctors) {
      fetch_doctors_list(dispatch, setdoctorTabList);
    }
  }, [doctors]);
  return (
    <div>
      {ispopUp?<AppPopup doctorid= {doctorid} setIsPopUp = {setIsPopUp} />:null }

      <div className="w-full  p-3 flex flex-col ">
        <div className="flex justify-end items-center">
          <form onSubmit={handleSearchSubmit} class=" w-[29%]  my-2  ">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative ">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                onChange={(e) => {
                  if (e?.target.value.length < 3) {
                    setdoctorTabList(doctors);
                  }
                  setsearchInput(e?.target.value);
                }}
                type="search"
                id="default-search"
                class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
              />
              <button
                type="submit"
                class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div class="relative   overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Position
                </th>

                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {doctorTabList?.map((e) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      class="w-10 h-10 rounded-full"
                      src={doc_img_url}
                      alt="Jese image"
                    />
                    <div class="ps-3">
                      <div class="text-base font-semibold">{e?.name}</div>
                    </div>
                  </th>
                  <td class="px-6 py-4">
                    {e?.userdetailes?.position || "N/A"}
                  </td>

                  <td class="px-6 py-4">
                    <button onClick={()=>{
                      setDoctorid(e?._id)
                      setIsPopUp(true)}} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      Book
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default DoctableList;
