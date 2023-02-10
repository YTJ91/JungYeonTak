import { Route, Routes } from "react-router-dom";
import Home from "./Component/Page/Home";
import Login from "./Component/Page/Login";
import Main from "./Component/Page/Main";
import Profile from "./Component/Page/Profile";
import SignUp from "./Component/Page/SignUp";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="/*" element={<Main />}>
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};
