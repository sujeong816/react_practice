import React, { useEffect, useState } from 'react' 
import { useNavigate, useParams } from 'react-router-dom' 
import styled from 'styled-components'; 
import type { DispatchFunc, Student } from './studentReducer' 
import { createStudent } from './studentReducer' 
import { loadStudent, updateStudent, addStudent, deleteStudent } from './studentService'; 

const Div = styled.div` 
    & > div { margin-bottom: 20px; } 
    & input[type=text], input[type=email], input[type=tel] { 
        padding: 8px; width: 300px; font-size: 12pt; } 
    & select { padding: 8px; width: 300px; font-size: 12pt; } 
    & > div > label { margin-right: 20px; font-size: 12pt; } 
    & button { padding: 0.4em 1.5em; font-size: 12pt; margin-right: 5px; } `; 
    
type Props = { dispatch : DispatchFunc } 
const StudentEdit = React.memo(({ dispatch }: Props) => { 
    const navigate = useNavigate(); 
    const params = useParams(); // /edit/3 URL에서 3 부분을 꺼내기 위한 객체 
    const id: number = params.id ? parseInt(params.id) : 0; // URL에서 id 값을 꺼낸다 
    const [student, setStudent] = useState<Student>(createStudent()); 
    const load = async () => { 
        // id 값으로 학생을 조회하기 위한 함수 
        const student1: Student = await loadStudent(Number(id), dispatch); 
        setStudent(student1); // 조회된 값을 student 상태에 채운다 
    } 
    useEffect(() => { 
        if (id) 
            loadStudent(Number(id), dispatch)
                .then(student => setStudent(student)) 
    }, []); // 컴포넌트가 마운트 될 때, id 값으로 학생을 조회한다 
    const onChange = (e: any) => setStudent({ ...student, [e.target.name]: e.target.value }); 
    const onSave = () => { 
        if (student.id) 
            updateStudent({...student, timestamp: Date.now()}, dispatch); // 서버에 수정 요청 
        else 
            addStudent(student, dispatch); // 서버에 등록 요청 
            navigate('/'); // 목록 화면으로 나간다 
    } 
    const onDelete = () => { 
        if (confirm('삭제하시겠습니까?')) { 
            deleteStudent(id, dispatch) // 서버에 삭제 요청 
            .then(()=>navigate('/')); // 삭제 작업이 완료된 후 목록 화면으로 나간다 
        } 
    } 
    const onCancel = () => navigate('/'); // 목록 화면으로 나간다 
    return ( 
    <Div> 
        <h1>학생 { id ? '수정' : '등록' }</h1> 
        <div> 
            <input type="text" placeholder="학번" onChange={onChange} 
                    name="studentNo" value={student.studentNo} /> 
        </div> 
        <div> 
            <input type="text" placeholder="이름" onChange={onChange} 
                    name="name" value={student.name} /> 
        </div> 
        <div> 
            <input type="email" placeholder="이메일" onChange={onChange} 
                    name="email" value={student.email} /> 
        </div> 
        <div> 
            <input type="tel" placeholder="전화번호" onChange={onChange} 
                    name="phone" value={student.phone} /> 
        </div> 
        <div> 
            <label> 
                <input type="radio" name="sex" value="남" 
                    onChange={onChange} checked={student.sex === "남"} /> 
                    <span>남자</span>
            </label> 
            <label> 
                <input type="radio" name="sex" value="여" 
                    onChange={onChange} checked={student.sex === "여"} /> 
                    <span>여자</span> 
            </label> 
        </div> 
        <div> 
            <select value={student.departmentId} name="departmentId" onChange={onChange}> 
                <option value={0}>학과를 선택하세요</option> 
                <option value={1}>소프</option> 
                <option value={2}>컴공</option> 
                <option value={3}>정통</option> 
                <option value={4}>인공지능</option> 
            </select> 
        </div> 
        <div> 
            <button type="button" onClick={onSave}>저장</button> 
            { (id>0) && <button type="button" onClick={onDelete}>삭제</button>} 
            <button type="button" onClick={onCancel}>취소</button> 
        </div> 
    </Div> 
    ) 
}) 
export default StudentEdit