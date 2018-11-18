import { combineReducers } from 'redux'
import todoLists from './todoLists'
import todoItems from './todoItems'

export default combineReducers({
  todoLists,
  todoItems
})
