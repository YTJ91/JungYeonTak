import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import LoginForm from "../Login/LoginForm";

function Login() {
  const user = useSelector((state) => state.user);

  // 로딩 중일 때는 반환 X => 순간적인 깜빡임 방지.
  if (user.isLoading) return;

  // user 데이터가 있을 때는 홈 컴포넌트로 리다이렉트.
  if (user.data) return <Navigate to="/home" />;

  return (
    <Container>
      <LoginForm />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #eee;
`;
export default Login;
