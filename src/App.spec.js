import React from 'react'
import { shallow } from 'enzyme'
import { describe, it } from 'mocha'
import { expect } from 'chai'
import Catalog from './containers/Catalog'
import ShoppingCart from './containers/ShoppingCart'
import App from './App'

describe('App', () => {
  const wrapper = shallow(<App />)

  describe('render', () => {
    it('has a catalog', () => {
      const catalogElement = wrapper.find(Catalog)
      expect(catalogElement).to.have.length(1)
    })

    it('has a shopping cart', () => {
      const shoppingCartElement = wrapper.find(ShoppingCart)
      expect(shoppingCartElement).to.have.length(1)
    })
  })
})
