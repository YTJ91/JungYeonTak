import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { fetchUser } from "./redux/user";
import { Router } from "./Router";
import { theme } from "./styles";

function App() {
  // App이 마운트 되자마자 login 페이지로 이동
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.data) dispatch(fetchUser());
  }, [dispatch, user]);

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
