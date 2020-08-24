const assertEqual = require('../assertEqual');
const {
  assert: { strictEqual },
} = require('chai');

describe('assertEqual fucntion', () => {
  it('should return ✅✅✅ Assertion Passed: actual === expected when pass same primitive values', () => {
    strictEqual(
      assertEqual('Hello', 'Hello'),
      '✅✅✅ Assertion Passed: Hello === Hello'
    );
  });
});
