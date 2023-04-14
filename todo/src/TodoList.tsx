import React from "react";
import TodoItem from "./TodoItem";
import type * as types from "./types";

type Props = {
  todoList: types.Todo[];
};

export default function TodoList({ todoList }: Props) {
  const trlist = todoList.map((todo) => <TodoItem todo={todo} key={todo.id} />);

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
