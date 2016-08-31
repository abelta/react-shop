import React from 'react'
import { shallow } from 'enzyme'
import { describe, it } from 'mocha'
import { expect } from 'chai'
import sinon from 'sinon'
import ShoppingCartItem from './ShoppingCartItem'

describe('ShoppingCartItem', () => {
  describe('render', () => {
    const props = {
      name: 'testName',
      quantity: 10,
      price: 100,
      promo: 'testPromo',
      gift: 3
    }
    const wrapper = shallow(<ShoppingCartItem {...props} />)

    it('renders', () => {
      expect(wrapper.is('.shopping-cart__item'))
    })

    it('has a name element and it matches props', () => {
      const nameElement = wrapper.find('.shopping-cart__item__name')
      expect(nameElement).to.have.length(1)
      expect(nameElement.text()).to.equal(props.name)
    })

    it('has a quantity element and it matches calculated value', () => {
      const quantityElement = wrapper.find('.shopping-cart__item__quantity')
      expect(quantityElement).to.have.length(1)
      expect(quantityElement.text()).to.equal(String(props.quantity - props.gift))
    })

    it('has a cost element and it matches calculated value', () => {
      const costElement = wrapper.find('.shopping-cart__item__cost')
      expect(costElement).to.have.length(1)
      expect(costElement.text()).to.include((props.quantity - props.gift) * props.price)
    })

    describe('gift element', () => {
      it('does not have one if gifts are not present', () => {
        const props = { gift: 0 }
        const wrapper = shallow(<ShoppingCartItem {...props} />)
        const giftElement = wrapper.find('.shopping-cart__item__gift')
        expect(giftElement).to.have.length(0)
      })

      it('has one if gifts are present and its content matches props', () => {
        const giftElement = wrapper.find('.shopping-cart__item__gift')
        expect(giftElement).to.have.length(1)
        expect(giftElement.text()).to.include(props.gift)
      })
    })

    describe('onClick', () => {
      it('triggers onClick when clicked', () => {
        const onClick = sinon.spy()
        const props = { onClick }
        const wrapper = shallow(<ShoppingCartItem {...props} />)
        wrapper.simulate('click')
        expect(onClick).to.have.property('callCount', 1)
      })
    })
  })
})
