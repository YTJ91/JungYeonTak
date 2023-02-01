import { useState } from "react";
import styled from "styled-components";

function Slider() {
  const [state, setState] = useState(0);

  const handleCountUp = () => {
    if (state < 2) setState(state + 1);
  };

  const handleCountDown = () => {
    if (state > 0) setState(state - 1);
  };

  return (
    <Container>
      <SlideList index={state}>
        <SlideItem bgColor="red">
          <img
            src={process.env.PUBLIC_URL + "/STELLAR_into_the_GALAXY.jpg"}
            alt=""
          />
        </SlideItem>
        <SlideItem bgColor="yellow">
          <img src={process.env.PUBLIC_URL + "/Overtrue.jpg"} alt="" />
        </SlideItem>
        <SlideItem bgColor="blue">
          <img src={process.env.PUBLIC_URL + "/Shout_in_Crisis.jpg"} alt="" />
        </SlideItem>
      </SlideList>
      <button onClick={handleCountDown}>이전</button>
      <button onClick={handleCountUp}>다음</button>
    </Container>
  );
}

const Container = styled.div`
  overflow: hidden;
  background-color: #eee;
`;

const SlideList = styled.ul`
  display: flex;
  transform: translateX(${({ index }) => index * -100}%);
  transition: transform 0.5s;
`;

const SlideItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 500px;

  list-style: none;
  flex-shrink: 0;

  border: 1px solid black;
  background-color: ${({ bgColor }) => bgColor};
  box-sizing: border-box;

  img {
    width: 100%;
  }
`;

export default Slider;
