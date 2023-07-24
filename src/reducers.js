import { createAction } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

export const addItem = createAction('addItem')

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