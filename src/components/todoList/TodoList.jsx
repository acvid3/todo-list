import React from 'react';
import {tl} from './todoList.module.css';
import TodoItem from '../todoItem/TodoItem';

const TodoList = ({todos}) => {
  return (
    <div className={tl}>
        {
            todos.map((todo, index) => <TodoItem todo={todo} index={index} key={todo.id} />)
        }
    </div>
  );
};

export default TodoList;
