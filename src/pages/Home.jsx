import Profile from "../components/Profile";
import { useSelector } from "react-redux";

import PatientTab from "../components/PatientTab";
import DoctorTab from "../components/DoctorTab";

const Home = () => {
  const { userData } = useSelector((e) => e.userReducer);

  return (
    <>
      <div>
        <Profile role={userData?.role} userData={userData} />
        {userData?.role == "DOCTER" ? <DoctorTab /> : <PatientTab />}
      </div>
    </>
  );
};

export default Home;
