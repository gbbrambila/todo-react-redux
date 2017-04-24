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
            <div className="row"  style={ {marginTop: '10px'} }>
                <div className="col-xs-1 col-sm-1 col-md-1">    
                    <button className="btn btn-default" onClick={ () => this.handleToggleTodo() }>
                        <span className="glyphicon glyphicon glyphicon-ok"></span>
                    </button>
                </div>             
                <div className="col-xs-10 col-sm-10 col-md-10" style={ {textDecoration: this.props.todo.completed ? 'line-through': 'none'} } > 
                    { this.props.todo.text }
                </div>
                <div className="col-xs-1 col-sm-1 col-md-1">                    
                    <button className="btn btn-default" onClick={ () => this.handleRemovoTodo() }>
                        <span className="glyphicon glyphicon-remove"></span>                        
                    </button>
                </div>
            </div>       
        )
    }
}

export default TodoItem;