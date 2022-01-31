import { useState, useEffect } from "react";
import TodoList from "./components/todoList/TodoList";
import Context from './hooks/context';
import getTodos from './api/getTodos';
import TodoForm from "./components/todoForm/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then(data => setTodos(data));
  }, []);

  const onChange = todoId => {
    todos.map(todo => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
    });
    setTodos([...todos]);
  }

  const addTodo = e => {
    e.preventDefault();
    
    if (e.target.elements.todo_name.value) {
      todos.push({
        id: Date.now(),
        title: e.target.elements.todo_name.value,
        userId: 1,
        completed: false
      });
  
      setTodos([...todos]);
      e.target.elements.todo_name.value = '';
    }
  }

  const removeTodo = todoId => {
    setTodos([...todos.filter(todo => todo.id !== todoId)]);
  }

  return (
    <Context.Provider value={{onChange, removeTodo}} >
      <div className="App">
          <TodoForm addTodo={addTodo} />
          {
            todos.length 
            ? <TodoList todos={todos} />
            : <h3>No todos!</h3>
          }
          
      </div>
    </Context.Provider>
  );
}

export default App;
