import React, {useState, useContext} from "react";

import {v4} from "uuid"
import {TodoContext} from "../Context/TodoContext"
import { ADD_TODO } from "../Context/action.types";

const TodoForm = () => {
    const [todoString, setTodoString] = useState()
    return(
        <div>
            <input 
            type="text"
            name="todo"
            id="todo"
            placeholder="your next todo"
            />
        this.keyword = 
            <button>Add</button>
        </div>
    )
}

export default TodoForm;