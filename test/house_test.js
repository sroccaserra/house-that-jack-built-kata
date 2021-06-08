const {expect} = require('chai');

const {House} = require('../src/house');

describe('The house that Jack built', function() {
  it('prints the first line', function() {
    const house = new House();
    const result = house.line(1);
    expect(result).to.equal('This is the house that Jack built.\n')
  });

  it('prints the second line', function() {
    const house = new House();
    const result = house.line();
    expect(result).to.equal('This is the malt that lay in the house that Jack built.\n')
  });
});
