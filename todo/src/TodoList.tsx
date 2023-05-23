import React from "react";
import TodoItem from "./TodoItem";
import type { Todo, DispatchFunc } from "./todoReducer";

type Props = {
  todoList: Todo[]; 
  dispatch: DispatchFunc
}

function TodoList({ todoList, dispatch }: Props) {
  console.log('TodoList')
  const trlist = todoList.map((todo) => (
    <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
  ));

  return (
    <table>
      <thead>
        <tr>
          <td>id</td>
          <td>할 일</td>
          <td>완료</td>
        </tr>
      </thead>
      <tbody>{trlist}</tbody>
    </table>
  );
}
export default React.memo(TodoList)