class Player {
  constructor(name, symbol, id) {
    this.name = name;
    this.symbol = symbol;
    this.id = id;
  }
  
  getId() {
    return this.id;
  }
}
module.exports = Player;
