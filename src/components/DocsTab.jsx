import React from "react";

const DocsTab = ({ switchtab, setSwitchTab }) => {
  return (
    <>
      <ul class="flex flex-wrap text-sm font-semibold border-b-2 pb-1 text-center text-gray-500  border-gray-200  dark:text-gray-400 ">
        <li onClick={() => setSwitchTab("APP")} class="me-2">
          <a
            href="#"
            aria-current="page"
            class={switchtab=="APP"?"inline-block p-4 text-blue-300 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-white ":"inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"}
          >
             Appointments
          </a>
        </li>
        <li onClick={() => setSwitchTab("SET")} class="me-2">
          <a href="#" aria-current="page" class={switchtab!="APP"?"inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-white ":"inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"}>

            Settings
          </a>
        </li>
      </ul>
    </>
  );
};

export default DocsTab;
