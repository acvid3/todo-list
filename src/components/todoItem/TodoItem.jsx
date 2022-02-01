import React, {useContext, useState} from 'react';
import { 
    todo_item_checked, 
    todo_item, 
    create_todo, 
    destroy_todo, 
    rm_todo 
} from './todoItem.module.css';
import Context from '../../hooks/context';
;


const TodoItem = ({todo, index}) => {
    const {onChange, removeTodo} = useContext(Context);
    const [animations, setAnimations] = useState(create_todo);

    const classes = [todo_item, animations];
    

    if (todo.completed) {
        classes.push(todo_item_checked);
    }

    return (
        <div className={classes.join(' ')}>
            <div>{index + 1}</div>

            <span>{todo.title}</span>
            <input type="checkbox" checked={todo.completed} onChange={() => onChange(todo.id)}/>

            <button className={rm_todo} onClick={() => {
                setAnimations(destroy_todo);
                setTimeout(() => removeTodo(todo.id), 1000);
            }}>&#10006;</button>
        </div>
    );
};

export default TodoItem;
