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
    const {onChange, removeTodo, sortTodo, movedTodoHandler} = useContext(Context);
    const [animations, setAnimations] = useState(create_todo);
    const [currentTodo, setCurrentTodo] = useState({});
    const classes = [todo_item, animations];
    

    if (todo.completed) {
        classes.push(todo_item_checked);
    }

    const dragStartHandler = (e, todo) => {
        movedTodoHandler(todo);
    }

    const dragEndHandler = (e, todo) => {
    
    }

    const dragOverHandler = (e, todo) => {
        e.stopPropagation();
        e.preventDefault();
      
    }

    const dropHandler = (e, todo) => {
        e.preventDefault();

        sortTodo(movedTodoHandler(), todo);
    }

    return (
        <div 
            className={classes.join(' ')}
            onDragStart={e => dragStartHandler(e, todo)}
            onDragLeave={e => dragEndHandler(e, todo)}
            onDragEnd={e => dragEndHandler(e, todo)}
            onDragOver={e => dragOverHandler(e, todo)}
            onDrop={e => dropHandler(e, todo)}
            draggable={true}
        >
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
