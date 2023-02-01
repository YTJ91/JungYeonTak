import styled from "styled-components";
import { useTodoState } from "../../Context/todos";
import TodoItem from "./TodoItem";

function TodoBody() {
  const todos = useTodoState();
  return (
    <Container>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo}>
            {todo.text}
          </TodoItem>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  overflow: auto;
`;

export default TodoBody;
