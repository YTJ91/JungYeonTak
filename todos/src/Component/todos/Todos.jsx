import styled from "styled-components";
import { TodoProvider } from "../../Context/todos";
import TodoBody from "./TodoBody";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";

function Todos() {
  return (
    <TodoProvider>
      <Container>
        <TodoHeader />
        <TodoBody />
        <TodoInput />
      </Container>
    </TodoProvider>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 700px;
  border: 1px solid #bbb;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);

  background-color: #fff;
`;
export default Todos;
