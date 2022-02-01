import React from 'react';
import {todo_form, form_add_todo, btn_add_todo} from './todoForm.module.css';


const TodoForm = ({addTodo}) => {
  return (
    <div className={todo_form}>
      <form className={form_add_todo} onSubmit={e => {addTodo(e)}}>
          <input type="text" name='todo_name'/>
          <button className={btn_add_todo}>Add todo</button>
      </form>
    </div>
  )
};

export default TodoForm;
