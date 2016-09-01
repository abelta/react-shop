import { expect } from 'chai'
import { describe, it } from 'mocha'
import * as types from '../actionTypes'
import catalogReducer from './catalogReducer'

describe('catalogReducer', () => {
  const state = {
    items: [
      { id: 1, name: 'name1', price: 20, available: 0 },
      { id: 2, name: 'name2', price: 30, available: 3 },
      { id: 3, name: 'name3', price: 40, available: 10 }
    ]
  }

  describe('receives action GET_CATALOG', () => {
    it('returns the catalog received in catalog initialization', () => {
      const action = { type: types.GET_CATALOG, items: state.items }
      expect(catalogReducer({ }, action)).to.eql(state)
    })
  })

  describe('receives action ADD_ITEM_TO_SHOPPING_CART', () => {
    describe('item is available', () => {
      it('is substracted from the catalog', () => {
        const action = { type: types.ADD_ITEM_TO_SHOPPING_CART, id: 2 }
        const expectedState = {
          items: [
            { id: 1, name: 'name1', price: 20, available: 0 },
            { id: 2, name: 'name2', price: 30, available: 2 },
            { id: 3, name: 'name3', price: 40, available: 10 }
          ]
        }
        expect(catalogReducer(state, action)).to.eql(expectedState)
      })
    })
    describe('item is not available', () => {
      it('is not substracted from the catalog', () => {
        const action = { type: types.ADD_ITEM_TO_SHOPPING_CART, id: 1 }
        const expectedState = state
        expect(catalogReducer(state, action)).to.eql(expectedState)
      })
    })
  })

  describe('receives action REMOVE_ITEM_FROM_SHOPPING_CART', () => {
    it('is restored to the catalog availability', () => {
      const action = { type: types.REMOVE_ITEM_FROM_SHOPPING_CART, id: 1 }
      const expectedState = {
        items: [
          { id: 1, name: 'name1', price: 20, available: 1 },
          { id: 2, name: 'name2', price: 30, available: 3 },
          { id: 3, name: 'name3', price: 40, available: 10 }
        ]
      }
      expect(catalogReducer(state, action)).to.eql(expectedState)
    })
  })
})
