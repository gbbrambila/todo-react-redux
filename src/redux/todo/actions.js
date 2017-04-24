import TodoActionsTypes from './types';

let nextTodoId = 1;
export function addTodo(text) {
    return { type: TodoActionsTypes.ADD_TODO, id: nextTodoId++, text }
}

export function toggleTodo(id) {
    return { type: TodoActionsTypes.TOGLLE_TODO, id: id }
}

export function removeTodo(id) {
    return { type: TodoActionsTypes.REMOVE_TODO, id: id }
}