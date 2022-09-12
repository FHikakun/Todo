import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, setTodos}) => {
    // keyは一意のものでないといけないのでIndexは最終手段
    let todoList = todos.map((todo) => <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo}/>);

    /**
     * 削除ボタン押下時
     * @param {string} id 
     */
    function deleteTodo(id) {
        todoList = todos.filter((todo) => id !== todo.id);
        setTodos(todoList);
    }

    return(
        <ul>
        {todoList}
        </ul>
    );
}

export default TodoList;