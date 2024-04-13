import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { refreshUser } from "../redux/auth/operations";
import { Toaster } from "react-hot-toast";
// import { getContactsItems } from "../redux/contacts/selectors";
import { getIsRefreshing } from "../redux/auth/selectors";
//---------------------------------------------------
// IMPORT COMPONENTS---------------------------------
//---------------------------------------------------
import { Loader } from "./Loader/Loader";
import Loyout from "./Loyout/Loyout";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";
import Contacts from "../pages/Contacts/Contacts";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";

// const Loyout = lazy(() => import("./Loyout/Loyout"));
// const Home = lazy(() => import("../pages/Home/Home"));
// const Login = lazy(() => import("../pages/login/Login"));
// const Register = lazy(() => import("../pages/Register/Register"));
// const Contacts = lazy(() => import("../pages/Contacts/Contacts"));

function App() {
  const isRefreshing = useSelector(getIsRefreshing);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Toaster position="top-right" reverseOrder={false} />
        <Loyout />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/Contacts"
            element={<PrivateRoute component={Contacts} />}
          ></Route>
          <Route
            path="/Login"
            element={<RestrictedRoute component={Login} />}
          ></Route>
          <Route
            path="/Register"
            element={<RestrictedRoute component={Register} />}
          ></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
