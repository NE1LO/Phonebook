import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { refreshUser } from "../redux/auth/operations";
import { Toaster } from "react-hot-toast";
// import { getContactsItems } from "../redux/contacts/selectors";
import { selectIsRefreshing } from "../redux/auth/selectors";
//---------------------------------------------------
// IMPORT COMPONENTS---------------------------------
//---------------------------------------------------
import { Loader } from "./Loader/Loader";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";

const Loyout = lazy(() => import("./Loyout/Loyout"));
const Home = lazy(() => import("../pages/Home/Home"));
const Login = lazy(() => import("../pages/login/Login"));
const Register = lazy(() => import("../pages/Register/Register"));
const Contacts = lazy(() => import("../pages/Contacts/Contacts"));

function App() {
  const isRefreshing = useSelector(selectIsRefreshing);

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
            path="/contacts"
            element={<PrivateRoute component={Contacts} redirectTo="/login" />}
          ></Route>
          <Route
            path="/login"
            element={
              <RestrictedRoute component={Login} redirectTo="/contacts" />
            }
          ></Route>
          <Route
            path="/register"
            element={
              <RestrictedRoute component={Register} redirectTo="/contacts" />
            }
          ></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
