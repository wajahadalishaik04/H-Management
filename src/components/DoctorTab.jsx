import React from "react";
import { useState } from "react";

import DoctableList from "./DoctableList";
import AppointmentList from "./AppointmentList";
import DocsTab from "./DocsTab";
import Settings from "./Settings";

const DoctorTab = () => {
  const [switchtab, setSwitchTab] = useState("APP");

  return (
    <>
      <DocsTab switchtab={switchtab} setSwitchTab={setSwitchTab} />

      {switchtab == "APP" ? <AppointmentList /> : <Settings />}
    </>
  );
};

export default DoctorTab;
