import * as types from '../actionTypes'

const addItemToShoppingCart = (id) => ({
  type: types.ADD_ITEM_TO_SHOPPING_CART,
  id
})

export default addItemToShoppingCart
