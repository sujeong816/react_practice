import React from 'react'
import type * as types from './types'

type Props = {
    todo: types.Todo
}

export default function TodoItem({todo}:Props){
    return (
        <tr>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
        </tr>
    )
}