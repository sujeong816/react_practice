import React from 'react'
import type * as types from './types'

type Props = {
    todo: types.Todo
    toggleTodo: types.ToogleTodoFunc;
    deleteTodo: types.DeleteTodoFunc
}

export default function TodoItem({todo, toggleTodo, deleteTodo}:Props){
    const onChange = () => toggleTodo(todo.id)
    const onClick = () => {
        if(window.confirm('삭제하시겠습니까?')){
            deleteTodo(todo.id)
        }
    }
    return (
        <tr className={todo.done ? "done" : ""}>
            <td>{todo.id}</td>
            <td>
                <input type='checkbox' checked={todo.done} onChange={onChange}/>
                {todo.title}
                <span onClick={onClick}>x</span>
            </td>
        </tr>
    )
}