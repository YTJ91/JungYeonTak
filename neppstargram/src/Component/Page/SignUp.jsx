import styled from "styled-components";
import SignUpForm from "./SignUp/SignUpForm";

function SignUp() {
  return (
    <Container>
      <SignUpForm />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
`;
export default SignUp;
