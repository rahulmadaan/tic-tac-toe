const Game = require("../src/game.js");
const assert = require("assert");

describe("game", function() {
  it("should return true for current player", function() {
    const player = {
      getId: () => 1234
    };
    const joinedPlayer = {
      getId: () => 1234
    };
    const game = new Game(1234, player);
    game.addPlayer(joinedPlayer);
    const actual = game.isCurrentPlayer(1234);
    const expected = true;
    assert.equal(actual, expected);
  });
  it("should return the board",function(){
    const player = {
      getId: () => 1234
    };
    const game = new Game(1234, player);
    const actual = game.getBoard();
    const expected =  {
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: ""
    };
    assert.deepEqual(actual,expected);
  });
  it("should return the game key", function() {
    const player = {
      getId: () => 1234
    };
    const game = new Game(1234, player);
    const actual = game.getKey();
    const expected = 1234;
    assert.equal(actual, expected);
  });  
});
