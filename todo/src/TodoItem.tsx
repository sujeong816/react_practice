import React from "react";
import type { Todo, DispatchFunc } from "./todoReducer";

type Props = {
  todo: Todo;
  dispatch: DispatchFunc
};

function TodoItem({ todo, dispatch }: Props) {
  console.log("TodoItem", todo.id)
  const onChange = () => dispatch({ type: "toggleTodo", payload: { id: todo.id } })
  
  const onClick = () => {
    if (window.confirm("삭제하시겠습니까?"))
      dispatch({type: "deleteTodo", payload: {id: todo.id}})
  };
  return (
    <tr className={todo.done ? "done" : ""}>
      <td>{todo.id}</td>
      <td>
        <input type="checkbox" checked={todo.done} onChange={onChange} />
        {todo.title}
        <span onClick={onClick}>x</span>
      </td>
    </tr>
  );
}
export default React.memo(TodoItem)