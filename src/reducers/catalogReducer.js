import * as types from '../actionTypes'

export default function catalogReducer (state = { items: [ ] }, action) {
  switch (action.type) {
    case types.GET_CATALOG: {
      return { items: action.items }
    }
    case types.SET_ITEM_APART_FROM_CATALOG: {
      let clonedItems = JSON.parse(JSON.stringify(state.items))
      const index = clonedItems.findIndex((elem) => elem.id === action.id)
      clonedItems[index].available--
      return { items: clonedItems }
    }
    case types.RETURN_ITEM_TO_CATALOG: {
      let clonedItems = JSON.parse(JSON.stringify(state.items))
      const index = clonedItems.findIndex((elem) => elem.id === action.id)
      clonedItems[index].available++
      return { items: clonedItems }
    }
    default: {
      return state
    }
  }
}
