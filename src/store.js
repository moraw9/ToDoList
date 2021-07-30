import { configureStore } from '@reduxjs/toolkit'
import todoListMenagerReducer from './features/todoListMeanger/todoListMenagerSlice'
export const store = configureStore({ 
reducer: {
    menager: todoListMenagerReducer
},})