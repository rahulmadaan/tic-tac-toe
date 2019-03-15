const board = {
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

class Game {
  constructor(gameKey, hostPlayer) {
    this.gameKey = gameKey;
    this.currentPlayer = hostPlayer;
    this.board = board;
  }

  isCurrentPlayer(playerId) {
    return this.currentPlayer.getId() == playerId;
  }

}

module.exports = Game;
