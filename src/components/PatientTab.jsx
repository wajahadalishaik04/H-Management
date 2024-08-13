import React from "react";
import { useState } from "react";

import DoctableList from "./DoctableList";
import AppointmentList from "./AppointmentList";
import Tabs from "../components/Tabs";

const PatientTab = () => {
  const [switchtab, setSwitchTab] = useState("BA");

  return (
    <>
      <Tabs switchtab={switchtab} setSwitchTab={setSwitchTab} />

      {switchtab == "BA" ? <DoctableList /> : <AppointmentList />}
    </>
  );
};

export default PatientTab;
