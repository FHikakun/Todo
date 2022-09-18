import React from 'react';
import { Todo } from './Todo';

export const TodoList = ({todos, handleDeleteTodo}) => {
    // keyは一意のものでないといけないのでIndexは最終手段
    // 変数に入れるのではなく、直でJSXにしていい
    // let todoList = todos.map((todo) => <Todo todo={todo} key={todo.id} handleDeleteTodo={handleDeleteTodo}/>);
    return(
        <>
         <ul>
            {todos.map((todo) => (
                <Todo todo={todo} key={todo.id} handleDeleteTodo={handleDeleteTodo}/>
             ))}
         </ul>
        </>
    );
}