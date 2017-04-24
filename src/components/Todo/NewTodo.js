import React from 'react';

class NewTodo extends React.Component {

    constructor(props) {
        super();
    }

    handleAddTodo() {
        const newTodo = document.getElementById("newTodo");
        if(!newTodo.value) {
            alert('Inform a new TODO!');
            return;
        }
        this.props.addTodo(newTodo.value);
        newTodo.value = '';
    }

    render() {
        return (
            <div>
                <input type="text" id="newTodo" />
                <button onClick={ () => this.handleAddTodo() }>Add Todo</button>
            </div>
        )
    }
}

export default NewTodo;