import { createStore, combineReducers } from 'redux';

import todos from './todo/reducers';

const rootReducer = combineReducers({
    todos   
});

let store = createStore(rootReducer);

console.log(store.getState());

store.subscribe(() => {
    console.log(store.getState())
});

export default store;