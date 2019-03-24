class Board {
  constructor() {
    this.board = {
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
  }
  isPlaceOccupied(place) {
    return this.board[place] !== "";
  }
  addMove(place, symbol) {
    this.board[place] = symbol;
  }
  getBoard() {
    return this.board;
  }
}
module.exports = Board;
