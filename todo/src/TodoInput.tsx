import React, { ChangeEvent, useState } from 'react'
import { DispatchFunc } from './todoReducer'

type Props = {
    dispatch: DispatchFunc
}

function TodoInput({dispatch}: Props) {
    console.log('TodoInput')
    const [title, setTitle] = useState<string>('')
    const onChange = (e: ChangeEvent<HTMLInputElement>)=>setTitle(e.target.value)
    const onClick = () => { 
        dispatch({type: "addTodo", payload: {title}})
        setTitle('')
    }

    return (
        <div>
            <input type='text' value={title} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
        </div>
    )
}
export default React.memo(TodoInput)