import { describe, it } from 'mocha'
import { expect } from 'chai'
import * as consts from '../constants'
import shoppingCartSelector,
  { subtotalSelector, vatSelector, shippingCostSelector, shoppingCartTotalSelector }
  from './shoppingCartSelector'

describe('shoppingCartSelector', () => {
  const state = {
    catalog: {
      items: [
        { id: 1, name: 'name1', price: 20, available: 8 },
        { id: 2, name: 'name2', price: 30, available: 3 },
        { id: 3, name: 'name3', price: 40, available: 10 }
      ]
    },
    shoppingCart: {
      items: [
        { id: 1, quantity: 1, gift: 0 },
        { id: 2, quantity: 3, gift: 1 }
      ]
    }
  }

  it('maps ids of the shopping cart into articles in the catalog', () => {
    const expectedResult = [
      { id: 1, name: 'name1', price: 20, available: 8, quantity: 1, gift: 0 },
      { id: 2, name: 'name2', price: 30, available: 3, quantity: 3, gift: 1 }
    ]
    expect(shoppingCartSelector(state)).to.eql(expectedResult)
  })

  describe('subtotalSelector', () => {
    describe('subtotal less than 100', () => {
      it('returns the sum of the articles in the cart and no promo', () => {
        const cheapState = Object.assign({}, state)
        cheapState.shoppingCart = {
          items: [
            { id: 1, quantity: 1, gift: 0 },
            { id: 2, quantity: 1, gift: 0 }
          ]
        }
        const expectedResult = {
          value: 50,
          promo: null
        }
        expect(subtotalSelector(cheapState)).to.eql(expectedResult)
      })
    })

    describe('subtotal greater than 100', () => {
      it('applies a 10% discount to the sum and includes a promo', () => {
        const expenderState = Object.assign({}, state)
        expenderState.shoppingCart = {
          items: [
            { id: 2, quantity: 2, gift: 0 },
            { id: 3, quantity: 2, gift: 0 }
          ]
        }
        const expectedResult = {
          value: 126,
          promo: consts.PROMOS.TEN_PERCENT_DISCOUNT
        }
        expect(subtotalSelector(expenderState)).to.eql(expectedResult)
      })
    })

    describe('gifted items have been included', () => {
      it('does not include gifts in the operation', () => {
        const withGiftState = state
        const expectedResult = {
          value: 80,
          promo: null
        }
        expect(subtotalSelector(withGiftState)).to.eql(expectedResult)
      })
    })
  })

  describe('vatSelector', () => {
    it('calculates vat for the subtotal', () => {
      const expectedResult = {
        value: 12.8
      }
      expect(vatSelector(state)).to.eql(expectedResult)
    })
  })

  describe('shippingCostSelector', () => {
    describe('subtotal is less than 50', () => {
      it('returns a fixed amount for shipping costs', () => {
        const smallOrderState = Object.assign({}, state)
        smallOrderState.shoppingCart = {
          items: [
            { id: 1, quantity: 1, gift: 0 }
          ]
        }
        const expectedResult = {
          value: consts.SHIPPING_COST,
          promo: null
        }
        expect(shippingCostSelector(smallOrderState)).to.eql(expectedResult)
      })
    })

    describe('subtotal is greater than 50', () => {
      it('returns shipping costs as being zero', () => {
        const expectedResult = {
          value: 0,
          promo: consts.PROMOS.FREE_SHIPPING
        }
        expect(shippingCostSelector(state)).to.eql(expectedResult)
      })
    })
  })

  describe('shoppingCartTotalSelector', () => {
    it('returns the sum of subtotal, vat and shipping costs', () => {
      const expectedResult = {
        value: 92.8
      }
      expect(shoppingCartTotalSelector(state)).to.eql(expectedResult)
    })
  })
})
