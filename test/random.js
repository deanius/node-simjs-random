let {expect} = require('chai')
let Random = require('../simjs-random')

describe('Random', () => {
  it('should know truth', () => {
    expect(1).to.equal(1)
  })
  it('should be a function', () => {
    expect(Random).to.be.instanceOf(Function)
  })

  it('should export our properties', () => {
    expect(new Random).to.respondTo('exponential')
  })
})