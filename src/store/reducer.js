import { createReducer } from "@reduxjs/toolkit";

export const userToken = localStorage.getItem("token") || null;
export const loadingReducer = createReducer({ loader: false }, (builder) => {
  builder.addCase("startLoading", (state) => {
    state.loader = true;
  }),
    builder.addCase("stopLoading", (state) => {
      state.loader = false;
    });
});

export const userReducer = createReducer({ user: userToken }, (builder) => {
  builder.addCase("loginUser", (state,action) => {
    state.user = action.payload.token
    state.userData = action.payload.userData
   
  });
});
export const tablelistDoctorReducer  = createReducer({doctors:null},(builders)=>{
  builders.addCase("listDoctors",(state,action)=>
  {
    state.doctors = action.payload;
  })
})
export const myAppointmentsReducer = createReducer(
  { appointments: null },
  (builder) => {
    builder.addCase("setAppointments", (state, action) => {
      state.appointments = action.payload;
    });
  }
);
