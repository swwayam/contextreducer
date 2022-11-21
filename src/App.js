import React, {useReducer} from 'react';
import TodoForm from './Components/TodoForm';

import {TodoContext} from "./Context/TodoContext"

import todoReducer from "./Context/reducer"

function App() {
  const [todos, dispatch] = useReducer(todoReducer, [])
  return(
    <TodoContext.Provider value={{todos,dispatch}}>
        <h1>Todo App With Context API</h1>
        <TodoForm />
    </TodoContext.Provider>
  )
}

export default App;
