import React, { useState } from "react";
import {
  createNewAppointment,

  getDocTimings,
} from "../store/action";
import { useDispatch } from "react-redux";
const AppPopup = ({ setIsPopUp, doctorid }) => {
  const [appdate, setappdate] = useState("");
  const [timings, setTimings] = useState([]);
  const [timeadded, settimeadded] = useState("");

  const dispatch = useDispatch();
  const getTiming = () => {
    console.log(appdate);
    getDocTimings(dispatch, appdate, setTimings, doctorid);
  };
  const bookSlot = () => {
    if (!appdate || !timeadded || !doctorid) {
      toast.error("Add all the fields");
      return;
    }

    createNewAppointment(dispatch, doctorid, appdate, timeadded, () => {
      setIsPopUp(false);
    });
  };
  return (
    <div className="w-full h-screen  flex items-center rounded-md justify-center bg-black opacity-80 z-50 fixed top-0">
      <div className="dark:bg-gray-200 bg-white">
        <div className=" min-w-72 flex p-5 flex-col">
          <div className="  flex justify-between items-center">
            <span className="w-52  my-2 text-lg text-slate-950 font-bold font-mono ">
              Please Choose the Appointment Date
            </span>
            <button onClick={() => setIsPopUp(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <input
            type="date"
            onChange={(e) => setappdate(e?.target.value)}
            name=""
            className="p-2 my-3 dark:font-medium  border-gray-400 border font-normal  outline-none shadow-5xl rounded-lg "
            id=""
          />
          <button
            onClick={getTiming}
            class="text-white mb-2 bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get Timings
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
          {timings.length <= 0 ? null : (
            <div className="flex flex-col w-full">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an option
              </label>

              <select
                id="countries"
                onChange={(e) => settimeadded(e.target.value)}

                class="bg-gray-50 border mb-3 border-gray-400 dark:bg-white text-black  outline-none font-medium text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5  dark:placeholder-gray-400  dark:text-black dark:focus:ring-blue-500 "
              >
                <option selected>Choose a Timing</option>
                {timings.map((e) => (
                  <option key={e} value={e}>
                    {e}
                  </option>
                ))}
              </select>
              <button
                onClick={bookSlot}
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppPopup;
