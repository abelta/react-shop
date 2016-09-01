import React from 'react'
import { shallow } from 'enzyme'
import { describe, it } from 'mocha'
import { expect } from 'chai'
import sinon from 'sinon'
import Catalog from './Catalog'

describe('Catalog', () => {
  describe('render', () => {
    it('renders', () => {
      const wrapper = shallow('<Catalog />')
      expect(wrapper.is('.catalog'))
    })

    it('loads catalog')
  })
})
