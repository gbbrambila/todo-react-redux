import TodoActionsTypes from './types';

const defaultTodo = {
    id: 0, 
    text: 'Default Todo', 
    completed: false 
};

function todos(state = [ defaultTodo ], action) {
    
    switch(action.type) {        
        case TodoActionsTypes.ADD_TODO: {
            return [...state, { id: action.id, text: action.text, completed: false } ];
        }
        case TodoActionsTypes.TOGLLE_TODO: {
            return state.map( ( todo, index) => {
                if(todo.id === action.id) {
                    return Object.assign( {}, todo, { completed: !todo.completed } );
                }
                return todo
            });
        }
        case TodoActionsTypes.REMOVE_TODO: {
            return state.filter(todo => todo.id !== action.id);
        }
        default: {
            return state;
        }
    }

}

export default todos;