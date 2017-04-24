import React from 'react';

class TodoItem extends React.Component {

    constructor(props) {
        super();
    }

    handleToggleTodo() {
        this.props.toggleTodo(this.props.todo.id);
    }

    handleRemovoTodo() {
        this.props.removeTodo(this.props.todo.id);
    }

    render() {
        return (
            <li className={ this.props.todo.completed ? 'completed' : 'todoDo'}> 
                { this.props.todo.id } - { this.props.todo.text }                 
                <button onClick={ () => this.handleToggleTodo() }>Toggle</button>
                <button onClick={ () => this.handleRemovoTodo() }>x</button> 
            </li>
        )
    }
}

export default TodoItem;