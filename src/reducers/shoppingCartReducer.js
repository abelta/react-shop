import * as types from '../actionTypes'

const addToCart = (state, id) => {
  let clonedItems = JSON.parse(JSON.stringify(state.items))
  const index = clonedItems.findIndex((elem) => elem.id === id)
  if (index >= 0) {
    let product = clonedItems[index]
    product.quantity++
  } else {
    clonedItems.push({ id: id, quantity: 1, gift: 0, promo: null })
  }
  return clonedItems
}

const removeFromCart = (state, id) => {
  let clonedItems = JSON.parse(JSON.stringify(state.items))
  const index = clonedItems.findIndex((elem) => elem.id === id)
  if (index >= 0) {
    let product = clonedItems[index]
    if (product.quantity > 1) {
      product.quantity--
    } else {
      clonedItems.splice(index, 1)
    }
  }
  return clonedItems
}

export default function shoppingCartReducer (state = { items: [ ] }, action) {
  switch (action.type) {
    case types.ADD_ITEM_TO_SHOPPING_CART: {
      let clonedItems = addToCart(state, action.id)
      const prevState = action.getState()
      prevState.shoppingCart.items = clonedItems
      return { items: clonedItems }
    }
    case types.REMOVE_ITEM_FROM_SHOPPING_CART: {
      const clonedItems = removeFromCart(state, action.id)
      const prevState = action.getState()
      prevState.shoppingCart.items = clonedItems
      return { items: clonedItems }
    }
    default: {
      return state
    }
  }
}
