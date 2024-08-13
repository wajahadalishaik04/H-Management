import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Loader from "./components/Loader";
import { useEffect } from "react";
import {useDispatch,    useSelector } from "react-redux";
import Notfound from "./pages/Notfound";
import { Toaster } from "react-hot-toast";
import { fetchUserData,  } from "./store/action";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from './pages/Signup' 
const App = () => {
  
  const { loader } = useSelector((e) => e.loadingReducer);
  const { user, userData } = useSelector((e) => e.userReducer);
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  useEffect(() => {
    if (!userData && token) {
      
      fetchUserData(dispatch);
    }
  }, [userData]);
  return (
    <>
      <Toaster />
      {loader ? <Loader /> : null}
      <BrowserRouter>
        <Suspense fallback={<h2>Loading...</h2>} >
          <Routes>
            <Route
              path="/"
              element={<Navigate to={user ? "/home" : "/login"} />}
            />
            <Route
              path="/home"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={user ? <Navigate to="/home" /> : <Login />}
            />
            <Route
              path="/signup"
              element={user ? <Navigate to="/home" /> : <Signup />}
            />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
