import React from 'react';

import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.scss';

const TodoList = ({ todos, onDeleted, onDone, onImportant }) => {

    const elements = todos.map((item) => {
        const {id, ...itemProps } = item;
        if(itemProps.see === true){
            return (
                <li key={id} className="list-group-item">
                    <TodoListItem {...itemProps}
                                  onDeleted = {() => onDeleted(id)}
                                  onDone = {() => onDone(id)}
                                  onImportant = {() => onImportant(id)}
                    />
                </li>
            );
        }else{
            return '';
        }

    });

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;
