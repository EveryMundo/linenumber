const { expect } = require('chai');

describe('server.js', () => {
  context('on load', () => {
    it('should export expected functions', () => {
      const {linenumber} = require('../');
      const res = linenumber();
      expect(res).to.equal('7');
    });
  });
});