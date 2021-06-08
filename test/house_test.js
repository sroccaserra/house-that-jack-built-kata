const {expect} = require('chai');

const {House} = require('../src/house');

describe('The house that Jack built', function() {
  it('prints the first line', function() {
    const house = new House();
    const result = house.recite();
    expect(result).to.equal('This is the house that Jack built.\n')
  });
});
