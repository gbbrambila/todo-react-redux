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
            <div className="row">
                <div className="col-xs-11 col-sm-11 col-md-11">
                    <input type="text" className="form-control" id="newTodo" />
                </div>
                <div className="col-xs-1 col-sm-1 col-md-1">
                    <button className="btn btn-default" onClick={ () => this.handleAddTodo() }>
                        <span className="glyphicon glyphicon-floppy-save"></span>
                    </button>
                </div>
            </div>
        )
    }
}

export default NewTodo;