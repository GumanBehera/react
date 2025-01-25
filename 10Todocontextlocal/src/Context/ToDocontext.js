import {createContext, useContext} from 'react';

export const ToDoContext = createContext({
   todos: [{
    id : 1,
    todo : "To Do Msg ",
    completed : false,
   }
    ],
    addtodo : (todo) => {},
    updatedtodo : (id,todo) => {},
    deletetodo : (id) => {},
    toggleComplete : (id) =>{}
});

export const useToDo = () => {
    return useContext(ToDoContext);
}

export const ToDoprovider = ToDoContext.Provider
