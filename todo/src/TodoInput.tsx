import { ChangeEvent, useState } from 'react'
import { DispatchFunc } from './todoReducer'

type Props = {
    dispatch: DispatchFunc
}

export default function TodoInput({dispatch}: Props) {
    const [title, setTitle] = useState<string>('')
    const onChange = (e: ChangeEvent<HTMLInputElement>)=>setTitle(e.target.value)
    const onClick = () => {
        dispatch({type:'addTodo',payload:{title}})
        setTitle('')
    }

    return (
        <div>
            <input type='text' value={title} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
        </div>
    )
}