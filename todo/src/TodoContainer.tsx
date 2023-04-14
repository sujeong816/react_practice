import React, { useState } from 'react' 
import type * as types from './types' 
import TodoRoot from './TodoRoot'; 

const data : types.Todo[] = [ 
    {id: 1, title: '프론트엔드 과제', done: false}, 
    {id: 2, title: '백엔드 과제', done: true}, 
    {id: 3, title: '웹프 시험공부', done: false} ]; 
    
function TodoContainer() { 
    const [todoList, setTodoList] = useState<types.Todo[]>(data); 
    const addTodo : types.AddTodoFunc = (title: string) => { 
        const lastIndex = todoList.length - 1; 
        const lastId = todoList[lastIndex].id; 
        const todo = {id: lastId + 1, title: title, done: false}; 
        setTodoList([...todoList, todo]); 
    } 
    const toggleTodo : types.ToogleTodoFunc = (id: number) => { 
        let newTodoList = todoList.map(
            todo => todo.id !== id ? todo : {...todo, done: !todo.done }
        );
        setTodoList(newTodoList);
    }; 
    const deleteTodo : types.DeleteTodoFunc = (id: number) => { 
        setTodoList( todoList.filter(todo => todo.id !== id)); 
    }; 
    
    return <TodoRoot todoList={todoList} 
                    addTodo={addTodo} 
                    toggleTodo={toggleTodo} 
                    deleteTodo={deleteTodo} />; 
} 
export default TodoContainer