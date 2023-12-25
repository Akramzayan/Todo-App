import { createSlice } from "@reduxjs/toolkit";
export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        getTodos: (state, action) => {
            state.todos = action.payload
        },
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo._id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map(todo => todo._id === action.payload._id ? action.payload : todo)
        }
    }   
})
export const {updateTodo,deleteTodo,getTodos,addTodo} = todosSlice.actions  