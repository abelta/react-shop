import { expect } from 'chai'
import { describe, it } from 'mocha'
import * as types from '../actionTypes'
import * as consts from '../constants'
import shoppingCartReducer from './shoppingCartReducer'

describe('shoppingCartReducer', () => {
  const globalState = {
    catalog: {
      items: [
        { id: 1, name: 'name1', price: 20, available: 1 },
        { id: 2, name: 'name2', price: 30, available: 3 },
        { id: 3, name: 'name3', price: 40, available: 10 }
      ]
    },
    shoppingCart: { items: [] }
  }
  describe('receives action ADD_ITEM_TO_SHOPPING_CART', () => {
    describe('it is the first item of its kind', () => {
      const state = { items: [ ] }
      const action = { type: types.ADD_ITEM_TO_SHOPPING_CART, id: 1, getState: () => globalState }

      it('adds new item', () => {
        expect(shoppingCartReducer(state, action).items).to.have.length(1)
      })

      it('updates summary', () => {
        const expectedSummary = {
          subtotal: { value: 20, promo: null },
          vat: { value: 3.2 },
          shippingCost: { value: consts.SHIPPING_COST, promo: null },
          total: { value: 32.95 }
        }
        const summary = shoppingCartReducer(state, action)
        expect(summary.subtotal).to.eql(expectedSummary.subtotal)
        expect(summary.vat).to.eql(expectedSummary.vat)
        expect(summary.shippingCost).to.eql(expectedSummary.shippingCost)
        expect(summary.total).to.eql(expectedSummary.total)
      })
    })

    describe('it is not the first item of its kind', () => {
      const state = { items: [ { id: 1, quantity: 1, gift: 0 } ] }
      const action = { type: types.ADD_ITEM_TO_SHOPPING_CART, id: 1, getState: () => globalState }

      it('does not add any new items', () => {
        const items = shoppingCartReducer(state, action).items
        expect(items).to.have.length(1)
      })

      it('adds one in quantity to existing item', () => {
        const items = shoppingCartReducer(state, action).items
        expect(items[0].quantity).to.eql(2)
      })

      it('updates summary', () => {
        const expectedSummary = {
          subtotal: { value: 40, promo: null },
          vat: { value: 6.4 },
          shippingCost: { value: consts.SHIPPING_COST, promo: null },
          total: { value: 56.15 }
        }
        const summary = shoppingCartReducer(state, action)
        expect(summary.subtotal).to.eql(expectedSummary.subtotal)
        expect(summary.vat).to.eql(expectedSummary.vat)
        expect(summary.shippingCost).to.eql(expectedSummary.shippingCost)
        expect(summary.total).to.eql(expectedSummary.total)
      })
    })

    describe('it is enough to grant a 3x2 discount', () => {
      const state = { items: [ { id: 1, quantity: 2, gift: 0 } ] }
      const action = { type: types.ADD_ITEM_TO_SHOPPING_CART, id: 1, getState: () => globalState }

      it('does not add any new items', () => {
        const items = shoppingCartReducer(state, action).items
        expect(items).to.have.length(1)
      })

      it('adds one to quantity and one to gift', () => {
        const items = shoppingCartReducer(state, action).items
        expect(items[0].quantity).to.eql(3)
        expect(items[0].gift).to.eql(1)
      })

      it('updates summary', () => {
        const expectedSummary = {
          subtotal: { value: 40, promo: null },
          vat: { value: 6.4 },
          shippingCost: { value: consts.SHIPPING_COST, promo: null },
          total: { value: 56.15 }
        }
        const summary = shoppingCartReducer(state, action)
        expect(summary.subtotal).to.eql(expectedSummary.subtotal)
        expect(summary.vat).to.eql(expectedSummary.vat)
        expect(summary.shippingCost).to.eql(expectedSummary.shippingCost)
        expect(summary.total).to.eql(expectedSummary.total)
      })
    })
  })

  describe('receives action REMOVE_ITEM_FROM_SHOPPING_CART', () => {
    const state = {
      items: [
        { id: 1, quantity: 1, gift: 0 },
        { id: 2, quantity: 2, gift: 0 },
        { id: 3, quantity: 3, gift: 1 }
      ]
    }

    describe('it is not the last of its kind', () => {
      const action = {
        type: types.REMOVE_ITEM_FROM_SHOPPING_CART,
        id: 2,
        getState: () => globalState
      }

      it('does not remove an item from the list', () => {
        const items = shoppingCartReducer(state, action).items
        expect(items).to.have.length(3)
      })

      it('removes one from quantity in item', () => {
        const items = shoppingCartReducer(state, action).items
        expect(items[1].quantity).to.eql(1)
      })
      it('updates summary', () => {
        const expectedSummary = {
          subtotal: { value: 117, promo: consts.PROMOS.TEN_PERCENT_DISCOUNT },
          vat: { value: 18.72 },
          shippingCost: { value: 0, promo: consts.PROMOS.FREE_SHIPPING },
          total: { value: 135.72 }
        }
        const summary = shoppingCartReducer(state, action)
        expect(summary.subtotal).to.eql(expectedSummary.subtotal)
        expect(summary.vat).to.eql(expectedSummary.vat)
        expect(summary.shippingCost).to.eql(expectedSummary.shippingCost)
        expect(summary.total).to.eql(expectedSummary.total)
      })
    })

    describe('it is the last of its kind', () => {
      const action = {
        type: types.REMOVE_ITEM_FROM_SHOPPING_CART,
        id: 1,
        getState: () => globalState
      }

      it('removes the item', () => {
        const items = shoppingCartReducer(state, action).items
        expect(items).to.have.length(2)
      })

      it('updates summary', () => {
        const expectedSummary = {
          subtotal: { value: 126, promo: consts.PROMOS.TEN_PERCENT_DISCOUNT },
          vat: { value: 20.16 },
          shippingCost: { value: 0, promo: consts.PROMOS.FREE_SHIPPING },
          total: { value: 146.16 }
        }
        const summary = shoppingCartReducer(state, action)
        expect(summary.subtotal).to.eql(expectedSummary.subtotal)
        expect(summary.vat).to.eql(expectedSummary.vat)
        expect(summary.shippingCost).to.eql(expectedSummary.shippingCost)
        expect(summary.total).to.eql(expectedSummary.total)
      })
    })

    describe('it is enough to opt out of a 3x2 discount', () => {
      const action = {
        type: types.REMOVE_ITEM_FROM_SHOPPING_CART,
        id: 3,
        getState: () => globalState
      }

      it('removes one from quantity and one from gift', () => {
        const items = shoppingCartReducer(state, action).items
        const item = items[2]
        expect(item.quantity).to.eql(2)
        expect(item.gift).to.eql(0)
      })

      it('updates summary', () => {
        const expectedSummary = {
          subtotal: { value: 144, promo: consts.PROMOS.TEN_PERCENT_DISCOUNT },
          vat: { value: 23.04 },
          shippingCost: { value: 0, promo: consts.PROMOS.FREE_SHIPPING },
          total: { value: 167.04 }
        }
        const summary = shoppingCartReducer(state, action)
        expect(summary.subtotal).to.eql(expectedSummary.subtotal)
        expect(summary.vat).to.eql(expectedSummary.vat)
        expect(summary.shippingCost).to.eql(expectedSummary.shippingCost)
        expect(summary.total).to.eql(expectedSummary.total)
      })
    })
  })
})
