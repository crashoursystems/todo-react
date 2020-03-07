import React, {Component} from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component{
    //Передает компонент
    render(){
        const { label, onDeleted, onDone, onImportant, important, done} = this.props;

        let ClassName = 'todo-list-item';

        if(done){
            ClassName += ' done';
        }

        if(important){
            ClassName += ' important';
        }

        return (
            <span className={ClassName}>
      <span
          className="todo-list-item-label"
            onClick={() => onDone()}>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={() => onImportant()}>
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
               onClick={() => onDeleted()}
                >
        <i className="fa fa-trash-o" />
      </button>
    </span>
        );
    }

}

