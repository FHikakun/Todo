import React, {useState} from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState(['JS', 'React','test']);
  const [inputText, setInputText] = useState('');

  const handleAddTodo = () => {
    todos.push(inputText);
    setInputText(...todos);
  }

  const handleInputText = (text) => setInputText(text);

  return (
    <div>
      <AddTodo text={inputText} handleInputText={e => handleInputText(e)} handleAddTodo={handleAddTodo}/>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
