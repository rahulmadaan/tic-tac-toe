const express = require("express");
const bodyParser = require("body-parser");

const getKey = require("./src/util.js");
const Game = require("./src/game.js");
const Player = require("./src/player.js");
const app = express();

const startGame = function(req, res) {
  const gameKey = getKey();
  const hostPlayer = new Player(req.body.user_name, "0", 1);
  const game = new Game(gameKey, hostPlayer);
  res.send(`Your game key is ${gameKey}`);
  res.end();
  app.game = game;
};

const joinGame = function(req, res) {
  res.send("You have joined the game.Your game is starting now...");
  res.end();
};

const instruction = function(req, res) {
  res.send("Instruction for how to play.");
  res.end();
};

const playTicTacToe = function(req, res) {
  const parameter = req.body.text;
  if (parameter == "start") {
    startGame(req, res);
    return;
  }
  if (parameter.startsWith("join")) {
    joinGame(req, res);
    return;
  }
  instruction(req, res);
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post("/", playTicTacToe);

module.exports = app;
