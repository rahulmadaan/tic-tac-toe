const Game = require("../src/game.js");
const assert = require("assert");

describe("game", function() {
  it("should return true for current player", function() {
    const player = {
      getId: () => 1234
    };
    const game = new Game(1234, player);
    const actual = game.isCurrentPlayer(1234);
    const expected = true;
    assert.equal(actual, expected);
  });
});
