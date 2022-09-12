
const Todo = ({todo, deleteTodo}) => {

    return (
        <li>
            {todo.task}
            <button onClick={() => deleteTodo(todo.id)}>削除</button>  
        </li>  
    );
}

export default Todo;