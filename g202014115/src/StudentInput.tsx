import { ChangeEvent, useState } from 'react'
import type * as types from './types'

type Props = {
    addStudent : types.AddStudentFunc
}

export default function StudentInput({addStudent}: Props) {
    const [stuNum, setStuNum] = useState<number>(0);
    const [stuName, setStuName] = useState<string>('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => setStuName(e.target.value)
    const onClick = () => { addStudent(stuNum, stuName); setStuNum(0); setStuName('') }

    return (
        <div>
            <input type='text' value={stuNum} onChange={onChange}/>
            <input type='text' value={stuName} onChange={onChange} />
            <button onClick={onClick}>추가</button>
        </div>
    )
}