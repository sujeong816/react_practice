import { useState } from 'react'
import * as types from './types'
import StudentRoot from './StudentRoot'

const data : types.Student[] =[
    {id: 1, stuNum: 201514191, stuName: '홍길동' },
    {id: 2, stuNum: 201514192, stuName: '임꺽정' },
    {id: 3, stuNum: 201514193, stuName: '전우치' }
]

export default function StudentContainer(){
    const [studentList, setStudentList] = useState<types.Student[]>(data)

    const addStudent : types.AddStudentFunc = (stuNum: number, stuName: string) => {
        const lastIndex = studentList.length-1
        const lastId = studentList[lastIndex].id;
        const student = {id: lastId+1, stuNum: stuNum, stuName: stuName}
        studentList.push(student)
        setStudentList([...studentList, student])
    }

    const deleteStudent: types.DeleteStudentFunc = (id: number) => {
        setStudentList(studentList.filter(student => student.id !== id))
    }

    return <StudentRoot studentList={studentList}
                        addStudent={addStudent}
                        deleteStudent={deleteStudent}/>
}