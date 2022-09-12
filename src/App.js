import React, {useState} from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

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

const App = () => {
  //const [todos, setTodos] = useState([createTodo('JS'), createTodo('React'),createTodo('test')]);
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

 /**
  * Todoを追加
  * @param {string} text 
  */
  const handleAddTodo = (text) => {
    todos.push(createTodo(text));
    setTodos(todos);
    
  }

  /**
   * 入力文字を保存
   * @param {string} text 
   */
  const handleInputText = (text) => {
    setInputText(text);
  }

  return (
    <div>
      <AddTodo text={inputText} handleInputText={text => handleInputText(text)} handleAddTodo={handleAddTodo}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
