import { Route, Routes } from "react-router-dom";
import PostDetail from "./Component/common/PostDetail";
import PostEdit from "./Component/common/PostEdit";
import PostList from "./Component/common/PostList";
import Home from "./Component/Page/Home";
import Login from "./Component/Page/Login";
import Main from "./Component/Page/Main";
import Post from "./Component/Page/Post";
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
        <Route path="post/*" element={<Post />}>
          <Route path="" element={<PostList />} />
          <Route path="edit" element={<PostEdit />} />
          <Route path=":id" element={<PostDetail />} />
        </Route>
      </Route>
    </Routes>
  );
};
