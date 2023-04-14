import React from "react";
import TodoItem from "./TodoItem";
import type * as types from "./types";

type Props = {
  todoList: types.Todo[];
  toggleTodo: types.ToogleTodoFunc;
  deleteTodo: types.DeleteTodoFunc;
};

export default function TodoList({ todoList }: Props) {
  const trlist = todoList.map((todo) => (
    <TodoItem
      todo={todo}
      key={todo.id}
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}
    />
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
