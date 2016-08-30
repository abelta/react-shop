import * as types from '../actionTypes'
import { subtotalSelector, vatSelector, shippingCostSelector, shoppingCartTotalSelector }
  from '../selectors/ShoppingCartSelector'

export default function shoppingCartReducer (state = { items: [ ] }, action) {
  switch (action.type) {
    case types.ADD_ITEM_TO_SHOPPING_CART: {
      console.log('state', state)
      console.log('getState', action.getState)
      console.log('action', action)
      let clonedItems = JSON.parse(JSON.stringify(state.items))
      console.log('clonedItems', clonedItems)
      const index = clonedItems.findIndex((elem) => elem.id === action.id)
      if (index >= 0) {
        clonedItems[index].quantity++
      } else {
        clonedItems.push({ id: action.id, quantity: 1 })
      }
      const partialState = action.getState()
      partialState.shoppingCart.items = clonedItems
      console.log('partialState', partialState)
      return {
        items: clonedItems,
        subtotal: subtotalSelector(partialState),
        vat: vatSelector(partialState),
        shippingCost: shippingCostSelector(partialState),
        total: shoppingCartTotalSelector(partialState)
      }
    }
    default: {
      return state
    }
  }
}
