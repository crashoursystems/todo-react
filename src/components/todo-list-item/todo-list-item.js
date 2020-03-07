import React, {Component} from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component{


    state = {
        done: false,
        isImportant: false
    };
    //Обрабатывает клик
    onLabelClick = () => {
        this.setState(
            (state) =>{
                return {done: !state.done}
            }
        );
    };

    onButtonImportantClick = () => {
        this.setState(
            (state) =>{
                return {isImportant: !state.isImportant}
        });
    };
    //Передает компонент
    render(){
        const { label, onDeleted} = this.props;
        const { done, isImportant } = this.state;

        let ClassName = 'todo-list-item';

        if(done){
            ClassName += ' done';
        }

        if(isImportant){
            ClassName += ' important';
        }

        return (
            <span className={ClassName}>
      <span
          className="todo-list-item-label"
            onClick={() => this.onLabelClick()}>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={() => this.onButtonImportantClick()}>
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
               onClick={() => onDeleted()} >
        <i className="fa fa-trash-o" />
      </button>
    </span>
        );
    }

}

