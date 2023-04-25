import type * as types from './types'

type Props = {
    student: types.Student
    deleteStudent: types.DeleteStudentFunc
}

export default function StudentItem({student, deleteStudent}: Props) {
    const onClick = () => {
        if(window.confirm('삭제하시겠습니까?'))
            deleteStudent(student.id)
    }
    
    return(
        <tr>
            <td>{student.id}</td>
            <td>{student.stuNum}</td>
            <td>
                {student.stuName}
                <span onClick={onClick}>x</span>
            </td>
        </tr>
    )
}