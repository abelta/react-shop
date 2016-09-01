import React from 'react'
import { shallow } from 'enzyme'
import { describe, it } from 'mocha'
import { expect } from 'chai'
import { ShoppingCartSummaryRaw as ShoppingCartSummary } from './ShoppingCartSummary'

describe('ShoppingCartSummary', () => {
  const shoppingCart = {
    items: [
      { id: 1, quantity: 1, gift: 0 },
      { id: 2, quantity: 3, gift: 1 }
    ],
    subtotal: { value: 40, promo: null },
    vat: { value: 6.4 },
    shippingCost: { value: 9.75, promo: null },
    total: { value: 56.15 }
  }

  describe('render', () => {
    const wrapper = shallow(<ShoppingCartSummary shoppingCart={shoppingCart} />)

    it('renders', () => {
      expect(wrapper.is('.shopping-cart__summary'))
    })

    it('has a subtotal element', () => {
      const subtotalElement = wrapper.find('.shopping-cart__summary__subtotal')
      expect(subtotalElement).to.have.length(1)
    })

    it('has a vat element', () => {
      const vatElement = wrapper.find('.shopping-cart__summary__vat')
      expect(vatElement).to.have.length(1)
    })

    it('has a shipping cost element', () => {
      const shippingCostElement = wrapper.find('.shopping-cart__summary__shipping-cost')
      expect(shippingCostElement).to.have.length(1)
    })

    it('has a total element', () => {
      const totalElement = wrapper.find('.shopping-cart__summary__total')
      expect(totalElement).to.have.length(1)
    })
  })
})
