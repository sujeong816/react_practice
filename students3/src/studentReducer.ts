import type { Timestamped } from "./timestamped"
import { mergeTimestampedList } from "./timestamped"

//Timestamped 타입을 부모 타입으로 선언
export type Student = Timestamped & { 
    id: number, // 부모 타입에 들어있으므로 생략해도 된다
    studentNo: string, 
    name: string, 
    email: string, 
    phone: string, 
    sex: string, 
    departmentId: number, 
    timestamp: number // 부모 타입에 들어있으므로 생략해도 된다
} 
export type State = { 
    students: Student[], 
    errorMsg: string, 
} 
export const initialState: State = { 
    students: [], 
    errorMsg: '' 
} 
export type Action = { 
    type: 'setStudents', 
    payload: { students: Student[] } } | 
    { type: 'setErrorMsg', payload: { errorMsg: string } } 
    
export type DispatchFunc = (action: Action) => void; 
export type ReducerFunc = (state: State, action: Action) => State; 

export function createStudent(): Student { 
    return { id: 0, studentNo:'', name:'', email:'', phone:'', 
        sex:'', departmentId:0, timestamp:0 
    }; 
} 

function merge(oldStudents: Student[], newStudents: Student[]): Student[] { 
    const map = new Map<number, Student>(); 
    for (const student of oldStudents) 
        map.set(student.id, student); 
    return newStudents.map(student => { 
        const oldStudent = map.get(student.id); 
        return (oldStudent && oldStudent.timestamp == student.timestamp) 
        ? oldStudent : student; 
    }); 
} 
export const reducer: ReducerFunc = ({ students, errorMsg }: State, action: Action) => { 
    switch (action.type) { 
        case 'setStudents': 
        students = mergeTimestampedList<Student>(students, action.payload.students) 
        if (errorMsg) errorMsg = ''; 
            break; 
            
        case 'setErrorMsg': 
        errorMsg = action.payload.errorMsg; 
        break; 
        
        default: 
            throw new Error('unknown action type'); 
    } 
    return { students, errorMsg }; 
}