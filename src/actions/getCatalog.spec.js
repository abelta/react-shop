import { expect } from 'chai'
import { describe, it } from 'mocha'
import * as types from '../actionTypes'
import getCatalog from './getCatalog'

describe('getCatalog', () => {
  it('should create an action get a catalog with random items', () => {
    const action = getCatalog()
    expect(action.type).to.eql(types.GET_CATALOG)
    expect(action.items).to.be.a('array')
    expect(action.items[0]).to.have.all.keys('id', 'name', 'price', 'available')
  })
})
