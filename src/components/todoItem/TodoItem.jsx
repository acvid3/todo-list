import React, {useContext} from 'react';
import { todo_item_checked, todo_item, create_todo, destroy_todo, rm_todo } from './todoItem.module.css';
import Context from '../../hooks/context';
;


const TodoItem = ({todo}) => {
    const {onChange, removeTodo} = useContext(Context);
    const classes = [todo_item];
    let bool = false;

    if (todo.completed) {
        classes.push(todo_item_checked);
    }

    return (
        <div id={!bool ? create_todo : destroy_todo} className={classes.join(' ')}>
            <div>{todo.id}</div>

            <span>{todo.title}</span>
            <input type="checkbox" checked={todo.completed} onChange={() => onChange(todo.id)}/>

            <button className={rm_todo} onClick={() => {
                bool = true;
                removeTodo(todo.id)
            }}>&#10006;</button>
            
        </div>
    );
};

export default TodoItem;
