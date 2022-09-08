import React from 'react';
import Todo from './Todo';

const TodoList = ({todos}) => {
    const test = [];
    todos.map((todo, index) => test.push(<Todo todo1={todo} key={index}/>));

    return(
        <ul>
        {test}
        </ul>
    );
}

export default TodoList;