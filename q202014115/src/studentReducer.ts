import type { Timestamped } from './timestamped'
import { mergeTimestampedList } from "./timestamped";

export type Student = Timestamped &{ 
    id: number;
    studentNo: string;
    name: string;
    email: string;
    phone: string;
    sex: string;
    departmentId: number;
    timestamp: number 
} 

export type State = { 
    students: Student[];
    errorMsg: string;
} 

export const initialState: State = { 
    students: [], errorMsg: '' 
} 

export type Action = 
{ type: 'setStudents', payload: { students: Student[] } } | 
{ type: 'setErrorMsg', payload: { errorMsg: string } } 

export type DispatchFunc = (action: Action) => void
export type ReducerFunc = (state: State, action: Action) => State

export function createStudent(): Student { 
    return { id: 0, studentNo:'', name:'', email:'', phone:'', 
                sex:'', departmentId:0, timestamp:0 }
} 

export const reducer: ReducerFunc = ({ students, errorMsg }: State, action: Action) => { 
    switch (action.type) { 
        case 'setStudents': 
            students = mergeTimestampedList<Student>(students, action.payload.students)
            if (errorMsg) 
                errorMsg = '' 
            break 
        case 'setErrorMsg': 
            errorMsg = action.payload.errorMsg
            break 
        default: 
        throw new Error('unknown action type') 
    } 
    return { students, errorMsg }
}