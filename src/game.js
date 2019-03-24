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
    this.joinedPlayer;
  }
  getBoard() {
    return this.board;
  }

  addPlayer(joinedPlayer) {
    if (!this.joinedPlayer) {
      this.joinedPlayer = joinedPlayer;
    }
  }
  isCurrentPlayer(playerId) {
    return this.currentPlayer.getId() == playerId;
  }
  getKey() {
    return this.gameKey;
  }
}

module.exports = Game;
