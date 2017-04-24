import React from 'react';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';
import NewTodo from './NewTodo';

import { 
  addTodo, 
  toggleTodo, 
  removeTodo 
} from '../../redux/todo/actions'; 
 
const VisibleTodoComponent = connect(
  (state) => {
    return {
      todos: state.todos
    }
  }, 
  (dispatch) => {
    return {
      addTodo: (text) => dispatch(addTodo(text)),
      toggleTodo: (id) => dispatch(toggleTodo(id)),
      removeTodo: (id) => dispatch(removeTodo(id))
    }
  }
)
class TodoComponent extends React.Component {

    constructor(props) {
        super();
    }

    listTodos() {
        return this.props.todos.map( (todo, index) => {
        return <TodoItem 
                    key={ todo.id } 
                    todo={ todo } 
                    toggleTodo={ this.props.toggleTodo } 
                    removeTodo={ this.props.removeTodo } />
        });
    }  

    render() {
        return (
            <div>
                <h1>React - Redux</h1>
                <NewTodo addTodo={ this.props.addTodo } />
                <ul> { this.listTodos() } </ul>
            </div>
        )
    }

}

export default VisibleTodoComponent(TodoComponent);