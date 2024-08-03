import { createSlice, nanoid } from "@reduxjs/toolkit"
import { useEffect, useState } from "react"

const initialState = {
    todos: [{ id: 1, text: "Learn vedanta" }],
    currentTodo: null
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        
        addTodo: (state, action) => {
            // creating new todo
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)

        }, // always give "state" and "action" 
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            state.todos = state.todos.map((todo) => todo.id === id ? { ...todo, text: text } : todo)

        },

        setCurrentTodo: (state, action) => {
            state.currentTodo = action.payload;
        }
    }

})

export const { addTodo, removeTodo, updateTodo, setCurrentTodo, getTodos } = todoSlice.actions

export default todoSlice.reducer;