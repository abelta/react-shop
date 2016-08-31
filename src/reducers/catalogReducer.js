import * as types from '../actionTypes'

export default function catalogReducer (state = { items: [ ] }, action) {
  switch (action.type) {
    case types.GET_CATALOG: {
      return { items: action.items }
    }
    case types.ADD_ITEM_TO_SHOPPING_CART: {
      let clonedItems = JSON.parse(JSON.stringify(state.items))
      const index = clonedItems.findIndex((elem) => elem.id === action.id)
      clonedItems[index].available--
      return { items: clonedItems }
    }
    case types.REMOVE_ITEM_FROM_SHOPPING_CART: {
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
