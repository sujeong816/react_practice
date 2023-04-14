import type * as types from './types'
import './TodoRoot.css'
import TodoInput from './TodoInput';
import TodoList from './TodoList';

type Props = {
    todoList: types.Todo[];
    addTodo: types.AddTodoFunc
}

export default function TodoRoot({todoList, addTodo}: Props) {
    return (
        <div className='todoRoot'>
            <h1>할 일</h1>
            <TodoInput addTodo={addTodo}/>
            <TodoList todoList={todoList}/>
        </div>
    )
}