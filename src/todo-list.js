import React, { Component } from 'react';
import ChecklistItem from './checklist-item';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            checklistItem: "",
            listItems: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        this.setState({
            listItems: this.state.listItems.append(this.state.checklistItem)
        })
        event.preventDefault()
    }
    render() { 
        return ( 
            <div>
                <form className= "list-form" onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    name="todo-item" 
                    placeholder="List item here..."
                    value={this.state.checklistItem}
                    onChange={this.handleChange}
                    />
                    <button>Save</button>
                </form>
                <br></br>
                <div className="checklist-todo">
                    List starts here as array
                    <ChecklistItem />
                </div>
            </div>
         );
    }
}
 
export default TodoList;