import { Route, Routes } from "react-router-dom";
import Home from "./Component/Page/Home";
import Login from "./Component/Page/Login";
import Profile from "./Component/Page/Profile";
import SignUp from "./Component/Page/SignUp";

export const Router = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signUp" element={<SignUp />} />

      <Route path="home" element={<Home />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  );
};
