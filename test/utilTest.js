const getKey = require("../src/util.js");
const assert = require("assert");

describe("getKey", function() {
  it("should return 4 digit random number", function() {
    const key = getKey();
    const actual = key.toString().length;
    const expected = 4;
    assert.equal(actual, expected);
  });
});
