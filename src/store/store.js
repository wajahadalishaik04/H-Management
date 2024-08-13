import { configureStore } from "@reduxjs/toolkit";
import { loadingReducer,userReducer,tablelistDoctorReducer,myAppointmentsReducer } from "./reducer";
const store = configureStore({
    reducer:{loadingReducer,userReducer,tablelistDoctorReducer,myAppointmentsReducer}
})
export default store;