import type { Student, DispatchFunc } from './studentReducer'; 
import { createStudent } from './studentReducer'; 
import axios from 'axios'; 

axios.defaults.baseURL = "http://localhost:3000"; 

// catch 블럭의 구현이 매우 유사하기 때문에, onError 함수로 추출해서 구현함. 
function onError(message: string, error:any, dispatch: DispatchFunc) { 
    const s = message + (error instanceof Error ? error.message : error); 
    dispatch({type: 'setErrorMsg', payload: { errorMsg: s } }); 
} 
    
// 학생 한 명을 조회해서 리턴하는 함수 구현. 
// async 함수의 리턴 타입은 Promise<Dto클래스> 이어야 한다. 
export async function reloadStudents(dispatch: DispatchFunc) { 
    try { 
        const response = await axios.get("/students"); 
        const students: Student[] = response.data; 
        dispatch({ type: 'setStudents', payload: { students } }); 
    } catch (error) { 
        onError('조회 에러: ', error, dispatch); 
    } 
} 
// 수정 화면에서 수정할 학생 데이터를 조회하기 위한 메소드 
export async function loadStudent(id: number, dispatch: DispatchFunc): Promise<Student> { 
    try { 
        const response = await axios.get("/students/" + id); 
        return response.data; 
    } catch (error) { 
        onError('조회 에러: ', error, dispatch); 
        return createStudent(); 
    } 
} 
export async function updateStudent(student: Student, dispatch: DispatchFunc) { 
    try { 
        await axios.put("/students/" + student.id, student); 
        reloadStudents(dispatch); 
    } catch (error) { 
        onError('저장 에러: ', error, dispatch); 
    } 
} 
export async function deleteStudent(id: number, dispatch: DispatchFunc) { 
    try { 
        await axios.delete("/students/" + id); 
        reloadStudents(dispatch); 
    } catch (error) { 
        onError('삭제 에러: ', error, dispatch); 
    } 
} 
export async function addStudent(student: Student, dispatch: DispatchFunc) { 
    try { 
        await axios.post("/students/", student); 
        reloadStudents(dispatch); 
    } catch (error) { 
        onError('저장 에러: ', error, dispatch); 
    }
}