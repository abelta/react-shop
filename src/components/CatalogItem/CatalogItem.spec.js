import React from 'react'
import { shallow } from 'enzyme'
import { describe, it } from 'mocha'
import { expect } from 'chai'
import sinon from 'sinon'
import CatalogItem from './CatalogItem'

describe('CatalogItem', () => {
  describe('render', () => {
    it('renders', () => {
      const wrapper = shallow(<CatalogItem />)
      expect(wrapper.is('.catalog-item'))
    })

    it('has a name element', () => {
      const wrapper = shallow(<CatalogItem name='testName' price={100} available={10} />)
      const nameElement = wrapper.find('.catalog-item__name')
      expect(nameElement).to.have.length(1)
      expect(nameElement.text()).to.equal('testName')
    })

    it('has a price element', () => {
      const wrapper = shallow(<CatalogItem name='testname' price={100} available={10} />)
      const priceElement = wrapper.find('.catalog-item__price')
      expect(priceElement).to.have.length(1)
      expect(priceElement.text()).to.include(100)
    })

    it('has an available element', () => {
      const wrapper = shallow(<CatalogItem name='testname' price={100} available={10} />)
      const availableElement = wrapper.find('.catalog-item__available')
      expect(availableElement).to.have.length(1)
      expect(availableElement.text()).to.equal('10')
    })
  })

  describe('onClick', () => {
    it('triggers onClick when clicked', () => {
      const onClick = sinon.spy()
      const wrapper = shallow(<CatalogItem onClick={onClick} />)
      wrapper.simulate('click')
      expect(onClick).to.have.property('callCount', 1)
    })
  })
})
