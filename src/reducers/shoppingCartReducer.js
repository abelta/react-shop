import * as types from '../actionTypes'

export default function shoppingCartReducer (state = { items: [ ] }, action) {
  switch (action.type) {
    case types.ADD_ITEM_TO_SHOPPING_CART: {
      let clonedItems = JSON.parse(JSON.stringify(state.items))
      const index = clonedItems.findIndex((elem) => elem.id === action.id)
      if (index >= 0) {
        clonedItems[index].quantity++
      } else {
        clonedItems.push({ id: action.id, quantity: 1 })
      }
      return { items: clonedItems }
    }
    default: {
      return state
    }
  }
}
