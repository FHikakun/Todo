import React from 'react';
import Todo from './Todo';

const TodoList = ({todos}) => {
    const test = [];
    // keyは一意のものでないといけないのでIndexは最終手段
    todos.map((todo) => test.push(<Todo todo={todo} key={todo.id}/>));

    return(
        <ul>
        {test}
        </ul>
    );
}

export default TodoList;