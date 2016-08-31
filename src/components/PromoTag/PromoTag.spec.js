import React from 'react'
import { shallow } from 'enzyme'
import { describe, it } from 'mocha'
import { expect } from 'chai'
import PromoTag from './PromoTag'

describe('PromoTag', () => {
  describe('render', () => {
    it('renders', () => {
      const wrapper = shallow(<PromoTag />)
      expect(wrapper.is('.promo-tag'))
    })

    it('includes type argument as HTML class', () => {
      const wrapper = shallow(<PromoTag type={'testType'} />)
      expect(wrapper.hasClass('testType'))
    })
  })
})
