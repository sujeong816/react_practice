export type Todo = {
  id: number;
  title: string;
  done: boolean;
};

export type State = { todoList: Todo[] };

export const initialState = {
  todoList: [
    { id: 1, title: "프론트엔드 과제", done: false },
    { id: 2, title: "백엔드 과제", done: true },
    { id: 3, title: "웹프 시험공부", done: false },
  ],
};
let lastId = 3;

export type Action =
  | { type: "addTodo"; payload: { title: string } }
  | { type: "toggleTodo"; payload: { id: number } }
  | { type: "deleteTodo"; payload: { id: number } };

export type DispatchFunc = (action: Action) => void;

export type ReducerFunc = (state: State, action: Action) => State;

export const reducer: ReducerFunc = (state: State, action: Action) => {
  switch (action.type) {
    case "addTodo":
      return {
        todoList: [
          ...state.todoList,
          { id: lastId+1, title: action.payload.title, done: false },
        ],
      };
    case "deleteTodo":
      return {
        todoList: state.todoList.filter(
          (todo) => todo.id !== action.payload.id
        ),
      };
    case "toggleTodo":
      return {
        todoList: state.todoList.map((todo) =>
          todo.id !== action.payload.id ? todo : { ...todo, done: !todo.done }
        ),
      };
    default:
        throw new Error("unknown action type")
  }
};
