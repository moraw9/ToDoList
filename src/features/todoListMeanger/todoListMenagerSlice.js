import { createSlice } from '@reduxjs/toolkit'
import todos from '../../utils'

const initialState = { 
  todosList: todos 
}

export const todoListMenagerSlice = createSlice({ 
  name: 'manageItemsInTodoList', 
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todosList = action.payload
    },
    deleteThing: (state, action) => {
      const newTodoList = state.todosList.filter(todo => todo.id !== action.payload.id)
      state.todosList = newTodoList
    },
    archiveThing: (state, action) => {
      const newTodoList = state.todosList.map( todo => todo.id !== action.payload.id ? todo : {...action.payload, isArchived: !action.payload.isArchived })
      state.todosList = newTodoList
    },
    setThingDone: (state, action) => {
      if (action.payload.isArchived && action.payload.isDone) return 
      const newTodoList = todos.map( todo => todo.id !== action.payload.id ? todo : {...action.payload, isDone: !action.payload.isDone })
      state.todosList = newTodoList
    }
  },
  })

export const { setTodos, deleteThing,archiveThing, setThingDone } = todoListMenagerSlice.actions
export default todoListMenagerSlice.reducer