
const Todo = ({todo, handleDeleteTodo}) => {

    return (
        <li>
            {todo.task}
            <button onClick={() => handleDeleteTodo(todo.id)}>削除</button>  
        </li>  
    );
}

export default Todo;