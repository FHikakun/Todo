
 export const Todo = ({todo, handleDeleteTodo}) => {

    //todo.task && todo.id これは何してる？
    return (
        <>
            {todo.task && todo.id && (
                <li>
                {todo.task}
                <button onClick={() => handleDeleteTodo(todo.id)}>削除</button>  
            </li>
        )}
        </>  
    );
};
