import * as types from '../actionTypes'

const removeItemFromShoppingCart = (id) => ({
  type: types.REMOVE_ITEM_FROM_SHOPPING_CART,
  id
})

export default removeItemFromShoppingCart
