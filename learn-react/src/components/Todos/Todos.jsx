import { useReducer } from "react";
import { todosReducer } from "../../state/todos";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";

const initalState = [
  { id: 1, text: "컴포넌트 작성하기", done: true },
  { id: 2, text: "기능구현하기", done: false },
  { id: 3, text: "리펙토링하기", done: false },
];

function Todos() {
  const [todos, dispatch] = useReducer(todosReducer, initalState);
  return (
    <div>
      <TodoCreate dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default Todos;
