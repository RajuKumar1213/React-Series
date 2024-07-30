import { useContext, createContext } from 'react'

export const todoContext = createContext({
    todos: [
        {
            id: 1,
            todoMsg: "Buy books",
            completed: false
        }
    ],
    addTodo: (todo) => { },
    deleteTodo: (id) => { },
    updateTodo: (id, todo) => { },
    toggleComplete: (id) => { }
})

export const useTodo = () => {
    return useContext(todoContext);
}

export const TodoProvider = todoContext.Provider;