import StudentItem from "./StudentItem";
import type * as types from "./types";

type Props = {
  studentList: types.Student[];
  deleteStudent: types.DeleteStudentFunc;
};

function StudentList({ studentList }: Props) {
  const trlist = studentList.map((student) => (
    <StudentItem
      student={student}
      key={student.id}
      deleteStudent={deleteStudent}
    />
  ));

  return (
    <table>
      <thead>
        <tr>
          <td>id</td>
          <td>학번</td>
          <td>이름</td>
        </tr>
      </thead>
      <tbody>{trlist}</tbody>
    </table>
  );
}
export default StudentList;
function deleteStudent(id: number): void {
    throw new Error("Function not implemented.");
}

