import React from 'react'
import { shallow } from 'enzyme'
import { describe, it } from 'mocha'
import { expect } from 'chai'
import { CatalogRaw as Catalog } from './Catalog'

describe('Catalog', () => {
  describe('render', () => {
    const catalog = {
      items: [
        { id: 1, name: 'name1', price: 20, available: 0 },
        { id: 2, name: 'name2', price: 30, available: 3 },
        { id: 3, name: 'name3', price: 40, available: 10 }
      ]
    }
    const getCatalog = () => catalog
    const wrapper = shallow(<Catalog getCatalog={getCatalog} catalog={catalog} />)

    it('renders', () => {
      expect(wrapper.is('.catalog'))
    })

    it('receives catalog', () => {
      const listElement = wrapper.find('.catalog__list')
      expect(listElement.find('li')).to.have.length(3)
    })
  })
})
