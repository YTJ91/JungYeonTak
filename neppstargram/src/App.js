import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { getCurrentUser } from "./api/auth";
import Header from "./Component/Header";
import { Router } from "./Router";
import { theme } from "./styles";

function App() {
  // App이 마운트 되자마자 login 페이지로 이동
  const navigate = useNavigate();
  useEffect(() => {
    getCurrentUser().then(() => {
      navigate("/home");
    });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Wrapper>
          <Router />
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: #eee;

  width: 100vw;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  max-width: 500px;
  flex: 1;
  background-color: #fff;
  margin: 0 auto;
`;

export default App;
