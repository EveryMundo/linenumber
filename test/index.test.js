const { expect } = require('chai')

describe('linenumber', () => {
  it('should export expected functions', () => {
    const { linenumber } = require('../')
    const res = linenumber()

    expect(res).to.equal('6')
  })
})
