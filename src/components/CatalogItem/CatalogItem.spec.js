import React from 'react'
import { shallow } from 'enzyme'
import { describe, it } from 'mocha'
import { expect } from 'chai'
import CatalogItem from './CatalogItem'

describe('CatalogItem', () => {
  describe('render', () => {
    it('renders', () => {
      const wrapper = shallow(<CatalogItem />)
      expect(wrapper.is('li.catalog-item'))
    })

    it('has a name element', () => {
      const wrapper = shallow(<CatalogItem name='testname' available='10' />)
      const nameElement = wrapper.find('.catalog-item__name')
      expect(nameElement).to.have.length(1)
      expect(nameElement.text()).to.equal('testname')
    })

    it('has an available element', () => {
      const wrapper = shallow(<CatalogItem name='testname' available='10' />)
      const availableElement = wrapper.find('.catalog-item__available')
      expect(availableElement).to.have.length(1)
      expect(availableElement.text()).to.equal('10')
    })
  })
})
