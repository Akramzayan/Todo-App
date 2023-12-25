import {configureStore} from '@reduxjs/toolkit'
import { todosSlice } from './reducers/todosSlice'

export default configureStore({
  reducer:{
    todos:todosSlice.reducer,
    
  }
})



