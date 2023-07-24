import { createAction } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

// actions
export const addItem = createAction('addItem')

// reducer
export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'addItem':
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    default:
      return state
  }
}

// selectors
export const selectItems = state => state.items