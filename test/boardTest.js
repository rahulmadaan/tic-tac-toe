const Board = require("../src/Board.js");
const assert = require("assert");

describe("board test", () => {
  it("should return empty board", () => {
    const board = new Board();
    const actual = board.getBoard();
    const expected = {
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
    assert.deepEqual(expected, actual);
  });
});
describe("board test", () => {
  it("should update(add) a place in board", () => {
    const board = new Board();
    board.addMove(3, "X");
    const actual = board.getBoard();
    const expected = {
      1: "",
      2: "",
      3: "X",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: ""
    };
    assert.deepEqual(expected, actual);
  });
});
describe("board test", () => {
  it("should return true for place, which is already occupied", () => {
    const board = new Board();
    board.addMove(3, "X");
    board.addMove(5, "0");
    const actual = board.isPlaceOccupied(5);
    const expected = true;
    assert.deepEqual(expected, actual);
  });
});
describe("board test", () => {
  it("should return false for place, which is not occupied", () => {
    const board = new Board();
    board.addMove(3, "X");
    board.addMove(5, "0");
    const actual = board.isPlaceOccupied(4);
    const expected = false;
    assert.deepEqual(expected, actual);
  });
});
