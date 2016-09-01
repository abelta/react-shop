import React from 'react'
import { shallow } from 'enzyme'
import { describe, it } from 'mocha'
import { expect } from 'chai'
import { ShoppingCartRaw as ShoppingCart } from './ShoppingCart'

describe('ShoppingCart', () => {
  const shoppingCart = {
    items: [
      { id: 1, quantity: 1, gift: 0 },
      { id: 2, quantity: 3, gift: 1 }
    ]
  }

  describe('render', () => {
    it('renders', () => {
      const wrapper = shallow(<ShoppingCart shoppingCartItems={shoppingCart.items} />)
      expect(wrapper.is('.shopping-cart'))
    })

    it('receives shoppingCart', () => {
      const wrapper = shallow(<ShoppingCart shoppingCartItems={shoppingCart.items} />)
      const listElement = wrapper.find('.shopping-cart__list')
      expect(listElement.find('li')).to.have.length(2)
    })
  })
})
