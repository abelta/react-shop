import { describe, it } from 'mocha'
import { expect } from 'chai'
import round from './round'

describe('round', () => {
  it('returns a float number rounded to the specified precision', () => {
    expect(round(2.2222, 2)).to.eql(2.22)
  })
})
