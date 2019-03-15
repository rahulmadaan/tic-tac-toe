const Player = require("../src/player.js");
const assert = require("assert");

describe("Player", function() {
  it("should return player id", function() {
    const player = new Player("Rahul", "0", 1234);
    const actual = player.getId();
    const expected = 1234;
    assert.equal(actual, expected);
  });
});
