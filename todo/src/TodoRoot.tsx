import "./TodoRoot.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useReducer } from "react";
import { initialState, reducer } from "./todoReducer";

export default function TodoRoot() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="todoRoot">
      <h1>할 일</h1>
      <TodoInput dispatch={dispatch} />
      <TodoList todoList={state.todoList} dispatch={dispatch}/>
    </div>
  );
}
