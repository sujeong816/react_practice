import "./TodoRoot.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import React, { useReducer } from "react";
import { reducer, initialState} from './todoReducer'

function TodoRoot() {
  console.log('TodoRoot')
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="todoRoot">
      <h1>할 일</h1>
      <TodoInput dispatch={dispatch} />
      <TodoList todoList={state.todoList} dispatch={dispatch}/>
    </div>
  );
}
export default React.memo(TodoRoot)