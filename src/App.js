import React, {useState} from 'react';
import { AddTodo } from './AddTodo';
import { TodoList } from './TodoList';

/**
 * Todo作成
 * @param {string} taskName 
 * @returns 
 */
const createTodo = (taskName) => {
  return {
    id: Date.now().toString(),
    task: taskName,
    isCompleted: false,
  }
}

export const App = () => {
  //const [todos, setTodos] = useState([createTodo('JS'), createTodo('React'),createTodo('test')]);
  const [todos, setTodos] = useState([]);

 /**
  * Todoを追加
  * @param {string} text 
  */
  const handleAddTodo = (text) => {
    console.log(text);
    //pushではなぜエラー？
    //todos.push(createTodo(text));
    //setTodos(todos);
    const todo = createTodo(text);
    setTodos((todos) => [...todos, todo]);
  }

  /**
   * 削除ボタン押下時
   * @param {string} id 
   */
  const handleDeleteTodo = (id) => {
    //const todoList = todos.filter((todo) => id !== todo.id);
    //setTodos(todoList);
    setTodos((todos) => {
      const currentTodoList = [...todos]; //todosを展開
      console.log(currentTodoList);
      return currentTodoList.filter((v) => v.id !== id); //名前をｖにしてるのは？
    })
  }

  return (
    <div>
      <AddTodo handleAddTodo={handleAddTodo}/>
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </div>
  );
}
