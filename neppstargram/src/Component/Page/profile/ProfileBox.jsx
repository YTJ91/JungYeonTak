import styled from "styled-components";

function ProfileBox() {
  return (
    <Container>
      <ImageBox>
        <img src="" alt="" />
      </ImageBox>
      <UserName>정연탁</UserName>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: #fff;
  width: 100%;
`;

const ImageBox = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #eee;
`;

const UserName = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 30px;
`;

export default ProfileBox;
