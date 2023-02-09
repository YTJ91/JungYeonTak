import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signUpUser } from "../../../api/auth";
import Button from "../../Button";
import InputBox from "../../InputBox";

function SignUpForm() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await signUpUser(inputs);

    if (data.success) {
      alert("회원가입에 성공했습니다.");
      navigate("/login");
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h2>SignUp</h2>
        <InputBox placeholder="이름을 입력해주세요." hide={inputs.name !== ""}>
          <input type="text" name="name" onChange={handleInputs} />
        </InputBox>

        <InputBox
          placeholder="이메일을 입력해주세요."
          hide={inputs.email !== ""}
        >
          <input type="text" name="email" onChange={handleInputs} />
        </InputBox>

        <InputBox
          placeholder="비밀번호를 입력해주세요."
          hide={inputs.password !== ""}
        >
          <input type="password" name="password" onChange={handleInputs} />
        </InputBox>

        <BtnBox>
          <Button text="SignUp" />
          <Button text="Cancle" bgcolor="red" type="button" />
        </BtnBox>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 300px;
  padding: 20px;
  background-color: #fff;

  h2 {
    margin-bottom: 20px;
    font-size: 1.4rem;
    font-weight: 700;
  }
`;

const BtnBox = styled.div`
  margin-top: 10px;
`;

export default SignUpForm;
