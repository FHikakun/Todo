
const Todo = ({todo}) => {

    return (
        <li>
            {todo.task}
            <button>削除</button>  
        </li>  
    );
}

export default Todo;