import { expect } from 'chai'
import { describe, it } from 'mocha'
import * as types from '../actionTypes'
import addItemToShoppingCart from './addItemToShoppingCart'

describe('addItemToShoppingCart', () => {
  it('should create an action to add an item to the shopping cart', () => {
    const expectedAction = {
      type: types.ADD_ITEM_TO_SHOPPING_CART,
      id: 0
    }
    expect(addItemToShoppingCart(0)).to.eql(expectedAction)
  })
})
