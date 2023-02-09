import styled from "styled-components";
import ProfileBox from "./profile/ProfileBox";

function Profile() {
  return (
    <div>
      <ProfileBox />
    </div>
  );
}

const Container = styled.div`
  height: 100%;
`;

export default Profile;
