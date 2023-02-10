import styled from "styled-components";
import SignUpForm from "../Login/SignUpForm";

function SignUp() {
  return (
    <Container>
      <SignUpForm />
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

export default SignUp;
