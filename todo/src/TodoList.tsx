import React from "react";
import TodoItem from "./TodoItem";
import { DispatchFunc, Todo } from "./todoReducer";

type Props = {
  todoList: Todo[];
  dispatch: DispatchFunc
}

export default function TodoList({ todoList, dispatch }: Props) {
  const trlist = todoList.map((todo) => (
    <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
  ));

  return (
    <table>
      <thead>
        <tr>
          <td>id</td>
          <td>할 일</td>
        </tr>
      </thead>
      <tbody>{trlist}</tbody>
    </table>
  );
}
