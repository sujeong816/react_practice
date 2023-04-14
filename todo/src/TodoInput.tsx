import { ChangeEvent, useState } from 'react'
import type * as types from './types'

type Props = {
    addTodo: types.AddTodoFunc
}

export default function TodoInput({addTodo}: Props) {
    const [title, setTitle] = useState<string>('')
    const onChange = (e: ChangeEvent<HTMLInputElement>)=>setTitle(e.target.value)
    const onClick = () => {addTodo(title); setTitle('')}

    return (
        <div>
            <input type='text' value={title} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
        </div>
    )
}