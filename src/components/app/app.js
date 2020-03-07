import React, {Component} from "react";
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list/';
import ItemStatusFilter from '../item-status-filter/';
import TodoAddItem from "../todo-add-item/todo-add-item";
import './app.css';


export default class App extends Component{
    maxId = 100;
    state = {
        todoData:[
            this.CreateTodoItem('Drink Cofee'),
            this.CreateTodoItem('Make Awesome App'),
            this.CreateTodoItem('Have a lunch'),
        ]
    };


    FindId(id){
        return this.state.todoData.findIndex((el) =>  el.id === id);
    }
    CreateTodoItem (label) {
        this.maxId++;
        return {
            label: label,
            important: false,
            id: this.maxId,
            done: false,
            see: true
        }
    };

    isSearchText(text, searchtext){
        return text.substring(0, searchtext.length) === searchtext;

    }

    toggleProperty(arr, id, propName){
        const idx = this.FindId(id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]
    }


    onItemSearch = (text) =>{
        this.setState(({todoData})=>{
                const SearchItems = todoData.map((element) =>{
                    const {see, ...Item} = element
                    return(
                        {see:this.isSearchText(element.label, text), ...Item}
                    );
                });
                const newArray = [...SearchItems];
                return {
                    todoData: newArray
                }
            }

        );
    };
    onButtonAddClick = (text) =>{
        this.maxId++;

        const newItem = this.CreateTodoItem(text);
        this.setState(({todoData}) => {
            const newArray =[...todoData, newItem];
            return {
                todoData: newArray
            }
      });
    };
    onButtonDeletedClick = (id) =>{
      this.setState(({todoData}) =>{
          const idx =  todoData.findIndex((el) =>  el.id === id);

          const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

          return {
              todoData: newArray
          }
      })
    };

    onToggleDone = (id) =>{
        this.setState(({todoData})=>{
            return{
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        });
    };

    onToggleImportant = (id) => {
        this.setState(({todoData})=>{
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        });
    };

    onFilterDone = () =>{
        this.setState(({todoData})=> {
            const SearchItems = todoData.map((element) => {
                const {see, ...Item} = element
                return (
                    {see: element.done, ...Item}
                );
            });
            const newArray = [...SearchItems];
            return {
                todoData: newArray
            }
        });

    }

    onFilterActive = () =>{
        this.setState(({todoData}) => {
            const SearchItems = todoData.map((element) => {
                const {see, ...Item} = element
                return (
                    {see: !element.done, ...Item}
                );
            });
            const newArray = [...SearchItems];
            return {
                todoData: newArray
            }
        });

    }

    onFilterAll = () => {
        this.setState(({todoData}) => {
            const SearchItems = todoData.map((element) => {
                const {see, ...Item} = element
                return (
                    {see: true, ...Item}
                );
            });
            const newArray = [...SearchItems];
            return {
                todoData: newArray
            }
        });
    }


    render(){

        const {todoData} = this.state;
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel
                    onSearch={(text) => this.onItemSearch(text)}/>
                    <ItemStatusFilter
                        onFilterDone={this.onFilterDone}
                        onFilterActive={this.onFilterActive}
                        onFilterAll={this.onFilterAll}
                    />
                </div>

                <TodoList todos={todoData}
                          onDeleted={(id) => {
                              this.onButtonDeletedClick(id)
                          }}
                          onDone ={(id) => this.onToggleDone(id)}
                          onImportant = {(id) => this.onToggleImportant(id)}
                />

                <TodoAddItem onAdd={(text) => this.onButtonAddClick(text) }/>
            </div>
        );
    }
}


