import React from 'react';
import {tl} from './todoList.module.css';
import TodoItem from '../todoItem/TodoItem';

const TodoList = ({todos}) => {
  return (
    <div className={tl}>
        {
            todos.map(todo => <TodoItem todo={todo} key={todo.id} />)
        }
    </div>
  );
};

export default TodoList;
