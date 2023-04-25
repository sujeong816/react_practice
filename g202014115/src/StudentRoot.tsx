import StudentInput from './StudentInput';
import StudentList from './StudentList';
import type * as types from './types'
import './StudentRoot.css'

type Props = {
    studentList: types.Student[];
    addStudent: types.AddStudentFunc;
    deleteStudent: types.DeleteStudentFunc;
}

export default function StudentRoot({studentList, addStudent, deleteStudent}: Props)  {
   return (
    <div className="studentRoot">
        <h1>학생 목록</h1>
        <StudentInput addStudent={addStudent}/>
        <StudentList studentList={studentList} deleteStudent={deleteStudent}/>
    </div>
   )
   
}