import { expect } from 'chai'
import { describe, it } from 'mocha'
import * as types from '../actionTypes'
import removeItemFromShoppingCart from './removeItemFromShoppingCart'

describe('removeItemFromShoppingCart', () => {
  it('should create an action to add an item to the shopping cart', () => {
    const expectedAction = {
      type: types.REMOVE_ITEM_FROM_SHOPPING_CART,
      id: 0
    }
    expect(removeItemFromShoppingCart(0)).to.eql(expectedAction)
  })
})
