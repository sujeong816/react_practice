export type Todo = {
    id: number;
    title: string;
    done: boolean;
}
export type AddTodoFunc = (text: string)=>void