import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
const api = "https://hospital-management-mylc.onrender.com/api/h1";
export const signupUser = async (dispatch, formData, Callback) => {
  const Api = api + "/signupuser";

  try {
    dispatch({ type: "startLoading" });
    const { data } = await axios.post(Api, formData);
    console.log(data);
    toast.success("User SignUp Successfully ");
    Callback();
  } catch (error) {
    const isError = error.response.data.data.includes("E11000")
      ? "User Already Created This Email"
      : error.response.data.data;
    toast.error(isError || "something went wrong");
  } finally {
    dispatch({ type: "stopLoading" });
  }
};

export const loginUser = async (dispatch, loginformData) => {
  const Api = api + "/signinuser";
  try {
    dispatch({ type: "startLoading" });
    const { data } = await axios.post(Api, loginformData);
    console.log(data);
    dispatch({
      type: "loginUser",
      payload: { token: data.data.token, userData: data?.data?.user },
    });
    localStorage.setItem("token", data.data.token);
    toast.success("User Login Successfully ");
  } catch (error) {
    toast.error(error.response?.data?.data || "something went wrong");
  } finally {
    dispatch({ type: "stopLoading" });
  }
};
export const fetchUserData = async (dispatch) => {
  const Api = api + "/getallusers";
  try {
    dispatch({ type: "startLoading" });
    const token = localStorage.getItem("token");
    const { data } = await axios.get(Api, { headers: { token } });
    console.log(data);
    dispatch({
      type: "loginUser",
      payload: { token: true, userData: data?.data?.user },
    });
  } catch (error) {
  } finally {
    dispatch({ type: "stopLoading" });
  }
};
export const fetch_doctors_list = async (dispatch, setdoctorTabList) => {
  try {
    dispatch({ type: "startLoading" });

    const Api = api + "/getalldocter";
    const token = localStorage.getItem("token");
    const { data } = await axios.get(Api, { headers: { token } });
    console.log("erer", data);
    dispatch({ type: "listDoctors", payload: data?.data });
    setdoctorTabList(data?.data);
  } catch (error) {
    toast.error(error.response?.data?.data || "something went wrong");
  } finally {
    dispatch({ type: "stopLoading" });
  }
};
export const saveDocPosition = async (dispatch, position) => {
  try {
    dispatch({ type: "startLoading" });

    const Api = api + "/saveposition";
    const token = localStorage.getItem("token");
    const { data } = await axios.put(Api, { position }, { headers: { token } });
    console.log(data);
    toast.success("updated successfully");
  } catch (error) {
    toast.error(error.response?.data?.data || "something went wrong");
  } finally {
    dispatch({ type: "stopLoading" });
  }
};
export const getDocTimings = async (
  dispatch,
  doctorid,
  appdate,
  setTimings
) => {
  try {
    dispatch({ type: "startLoading" });
    const API =
      api + `/getapointmenttiming?docterid=${doctorid}&dateadded=${appdate}`;
    const token = localStorage.getItem("token");
    const { data } = await axios.get(API, {
      headers: { token },
    });
    console.log(data.data);

    if (data.data.length >= 5) {
      toast.error("No available timings");
      return;
    }
    setTimings(filterTimings(data.data));
  } catch (error) {
    toast.error(error?.response?.data?.data || "something went wrong");
  } finally {
    dispatch({ type: "stopLoading" });
  }
};
export const createNewAppointment = async (
  dispatch, docterid, appdate, timeadded,
  cb
) => {
  try {
    dispatch({ type: "startLoading" });
    const API = api + `/appointmentbooking`;
    const token = localStorage.getItem("token");
    const { data } = await axios.post(
      API,
      {
        docterid: docterid,
        dateadded: appdate,
        timeadded: timeadded,
      },
      {
        headers: { token },
      }
    );
    console.log(data.data);
    toast.success("Booked the appointment");
    cb();
  } catch (error) {
    toast.error(error?.response?.data?.data || "something went wrong");
    console.log(error?.response?.data?.data);
  } finally {
    dispatch({ type: "stopLoading" });
  }
};

export const getAllMyAppointments = async (dispatch, cb) => {
  try {
    dispatch({ type: "startLoading" });
    const API = api + `/getallappointment`;
    const token = localStorage.getItem("token");
    const { data } = await axios.get(API, {
      headers: { token },
    });
    console.log(data.data);
    dispatch({ type: "setAppointments", payload: data.data });
    cb(data.data);
  } catch (error) {
    toast.error(error?.response?.data?.data || "something went wrong");
    console.log(error?.response?.data?.data);
  } finally {
    dispatch({ type: "stopLoading" });
  }
};
