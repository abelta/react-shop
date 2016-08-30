import * as types from '../actionTypes'
import * as consts from '../constants'
import { subtotalSelector, vatSelector, shippingCostSelector, shoppingCartTotalSelector }
  from '../selectors/ShoppingCartSelector'

export default function shoppingCartReducer (state = { items: [ ] }, action) {
  switch (action.type) {
    case types.ADD_ITEM_TO_SHOPPING_CART: {
      let clonedItems = JSON.parse(JSON.stringify(state.items))
      const index = clonedItems.findIndex((elem) => elem.id === action.id)
      if (index >= 0) {
        let product = clonedItems[index]
        product.quantity++
        product.promo = new Array(Math.floor(product.quantity / 3)).fill(consts.PROMOS.EXTRA_ITEM)
        product.gift = Math.floor(product.quantity / 3)
      } else {
        clonedItems.push({ id: action.id, quantity: 1, gift: 0, promo: [ ] })
      }
      const prevState = action.getState()
      prevState.shoppingCart.items = clonedItems
      return {
        items: clonedItems,
        subtotal: subtotalSelector(prevState),
        vat: vatSelector(prevState),
        shippingCost: shippingCostSelector(prevState),
        total: shoppingCartTotalSelector(prevState)
      }
    }
    case types.REMOVE_ITEM_FROM_SHOPPING_CART: {
      let clonedItems = JSON.parse(JSON.stringify(state.items))
      const index = clonedItems.findIndex((elem) => elem.id === action.id)
      if (index >= 0) {
        let product = clonedItems[index]
        if (product.quantity > 1) {
          product.quantity--
          product.promo = new Array(Math.floor(product.quantity / 3)).fill(consts.PROMOS.EXTRA_ITEM)
          product.gift = Math.floor(product.quantity / 3)
        } else {
          clonedItems.splice(index, 1)
        }
      }
      const prevState = action.getState()
      prevState.shoppingCart.items = clonedItems
      return {
        items: clonedItems,
        subtotal: subtotalSelector(prevState),
        vat: vatSelector(prevState),
        shippingCost: shippingCostSelector(prevState),
        total: shoppingCartTotalSelector(prevState)
      }
    }
    default: {
      return state
    }
  }
}
