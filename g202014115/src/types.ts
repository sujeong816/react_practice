export type Student = {
    id: number;
    stuNum: number;
    stuName: string;
}
export type AddStudentFunc = (id: number, text: string) => void;
export type DeleteStudentFunc = (id: number) => void;