import React, {Component} from "react";
import './todo-add-item.css';

export default class TodoAddItem extends Component{
    state = {
      label: ''
    };
    onLabelChange = (e) =>{
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.onAdd(this.state.label);
        this.setState({
            label: ''
            }
        )
    };
    render(){
        return (

            <form className="TodoAddItem"
                onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-control mt-2" placeholder="What needs to be "
                       onChange={this.onLabelChange}
                       value={this.state.label}
                />
                <input type="submit"
                        className="btn btn-outline-success mt-2 "
                        value="Add todo item" />
            </form>
        );
    }

};
