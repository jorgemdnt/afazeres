import { updateItemInList } from '../helpers/arrayHelpers'

const todoItems = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO_ITEM':
      return state.concat({
        todoItemId: action.todoItemId,
        text: action.text,
        done: false,
        deadline: null
      })
    case 'CHANGE_TODO_ITEM_TEXT':
      return updateItemInList(
        state,
        todoItem => todoItem.todoItemId === action.todoItemId,
        todoItem => ({ ...todoItem, text: action.newText })
      )
    case 'TOGGLE_TODO_ITEM':
      return updateItemInList(
        state,
        todoItem => todoItem.todoItemId === action.todoItemId,
        todoItem => ({ ...todoItem, done: !todoItem.done })
      )
    case 'REMOVE_TODO_ITEM':
      return state.filter(todoItem => todoItem.todoItemId !== action.todoItemId)
    case 'CHANGE_TODO_ITEM_DEADLINE':
      return updateItemInList(
        state,
        todoItem => todoItem.todoItemId === action.todoItemId,
        todoItem => ({ ...todoItem, deadline: action.newDeadline })
      )
    default:
      return state
  }
}

const todoListItems = (state = {}, action) => {
  if (action.type) {
    return {
      ...state,
      [action.todoListId]: todoItems(state[action.todoListId], action)
    }
  } else {
    return state
  }
}

export default todoListItems
