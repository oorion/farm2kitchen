import { createAction } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  user: {},
}

// actions
export const addItem = createAction('addItem')
export const addUser = createAction('addUser')

// reducer
export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'addItem':
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    case 'addUser':
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}

// selectors
export const selectItems = state => state.items
export const selectUser = state => state.user