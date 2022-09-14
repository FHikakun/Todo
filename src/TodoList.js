import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, handleDeleteTodo}) => {
    // keyは一意のものでないといけないのでIndexは最終手段
    let todoList = todos.map((todo) => <Todo todo={todo} key={todo.id} handleDeleteTodo={handleDeleteTodo}/>);

    return(
        <ul>
        {todoList}
        </ul>
    );
}

export default TodoList;