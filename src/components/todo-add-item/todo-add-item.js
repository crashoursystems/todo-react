import React from "react";
import './todo-add-item.css';

const TodoAddItem = ({onAdd}) => {

    return (
        <div className="TodoAddItem">
            <button type="button"
                    className="btn btn-outline-success mt-2 "
            onClick={() => onAdd('Hello World')}>
            Add todo item
             </button>
        </div>
    );
}

export default TodoAddItem;
