import { useState, useEffect } from "react";
import TodoList from "./components/todoList/TodoList";
import Context from './hooks/context';
import getTodos from './api/getTodos';
import TodoForm from "./components/todoForm/TodoForm";

const storage = todos => {
  if (todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  if (JSON.parse(localStorage.getItem('todos'))) {
    return JSON.parse(localStorage.getItem('todos'))
  }

  return {
    length: 0
  };
}

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    storage().length
    ? setTodos(storage())
    : getTodos().then(data => setTodos(storage(data)));
    
  }, []);

  const onChange = todoId => {
    todos.map(todo => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
    });
    setTodos([...storage(todos)]);
  }

  const addTodo = e => {
    e.preventDefault();
    
    if (e.target.elements.todo_name.value) {
      todos.unshift({
        id: Date.now(),
        title: e.target.elements.todo_name.value,
        userId: 1,
        completed: false
      });
  
      setTodos([...storage(todos)]);
      e.target.elements.todo_name.value = '';
    }
  }

  const removeTodo = todoId => {
    setTodos([...storage(todos.filter(todo => todo.id !== todoId))]);
  }

  return (
    <Context.Provider value={{onChange, removeTodo}} >
      <div className="App">
          <TodoForm addTodo={addTodo} />
          {
            todos.length 
            ? <TodoList todos={todos} />
            : <h3 style={{color: '#fff'}}> No todos!</h3>
          }
          
      </div>
    </Context.Provider>
  );
}

export default App;
